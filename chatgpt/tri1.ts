const { ethers } = require('ethers');
const { request, gql } = require('graphql-request');

// Define the Uniswap subgraph endpoint
const subgraphEndpoint = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';

// GraphQL query to fetch all pairs
const pairsQuery = gql`
  {
    pairs(first: 50) {
      id
      token0 {
        symbol
        id
      }
      token1 {
        symbol
        id
      }
    }
  }
`;

// Uniswap V2 Router contract address and ABI
const routerAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
const routerABI = [
  'function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)'
];

// Connect to an Ethereum node
const provider = new ethers.providers.InfuraProvider('mainnet', 'YOUR_INFURA_PROJECT_ID');
const routerContract = new ethers.Contract(routerAddress, routerABI, provider);

async function fetchPairs() {
  try {
    const data = await request(subgraphEndpoint, pairsQuery);
    return data.pairs;
  } catch (error) {
    console.error('Error fetching pairs:', error);
    return [];
  }
}

async function getAmountsOut(amountIn, path) {
  try {
    const amountsOut = await routerContract.getAmountsOut(amountIn, path);
    return amountsOut;
  } catch (error) {
    console.error(`Error fetching amounts out for path ${path}:`, error);
    return [];
  }
}

async function findArbitrageOpportunities(pairs) {
  const amountIn = ethers.utils.parseUnits('1', 18); // Example: 1 unit of token0
  const pairMap = new Map();

  // Create a mapping for quick lookup
  pairs.forEach(pair => {
    const { id, token0, token1 } = pair;
    if (!pairMap.has(token0.id)) pairMap.set(token0.id, []);
    if (!pairMap.has(token1.id)) pairMap.set(token1.id, []);
    pairMap.get(token0.id).push({ id, token0, token1 });
    pairMap.get(token1.id).push({ id, token0, token1 });
  });

  // Iterate over each pair to find direct and reverse opportunities
  for (const pair of pairs) {
    const { token0, token1 } = pair;
    const path = [token0.id, token1.id];
    const reversePath = [token1.id, token0.id];

    try {
      const amountsOutForward = await getAmountsOut(amountIn, path);
      const amountsOutReverse = await getAmountsOut(amountIn, reversePath);

      const price0In1 = ethers.utils.formatUnits(amountsOutForward[1], 18);
      const price1In0 = ethers.utils.formatUnits(amountsOutReverse[1], 18);

      console.log(`Pair: ${token0.symbol}/${token1.symbol}`);
      console.log(`Price of ${token0.symbol} in ${token1.symbol}: ${price0In1}`);
      console.log(`Price of ${token1.symbol} in ${token0.symbol}: ${price1In0}`);

      // Check for arbitrage opportunity
      const potentialProfit = price1In0 - price0In1;
      if (potentialProfit > 0) {
        console.log(`Arbitrage Opportunity: Buy ${token0.symbol}, Sell ${token1.symbol}, Profit: ${potentialProfit}`);
      }

      // Triangular Arbitrage
      if (pairMap.has(token0.id) && pairMap.has(token1.id)) {
        for (const pair2 of pairMap.get(token0.id)) {
          if (pair2.token1.id !== token1.id) {
            const token2 = pair2.token1;
            const trianglePath = [token0.id, token1.id, token2.id, token0.id];
            const amountsOutTriangle = await getAmountsOut(amountIn, trianglePath);
            const triangleProfit = amountsOutTriangle[3].sub(amountIn);

            if (triangleProfit.gt(0)) {
              console.log(`Triangular Arbitrage Opportunity: ${token0.symbol} -> ${token1.symbol} -> ${token2.symbol} -> ${token0.symbol}, Profit: ${ethers.utils.formatUnits(triangleProfit, 18)}`);
            }
          }
        }
      }

      console.log('---');
    } catch (error) {
      console.error(`Error processing pair ${token0.symbol}/${token1.symbol}:`, error);
    }
  }
}

async function main() {
  const pairs = await fetchPairs();
  await findArbitrageOpportunities(pairs);
}

main().catch(console.error);
