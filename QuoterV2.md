* Uniswap quoterV2 Contract
* https://docs.uniswap.org/contracts/v3/reference/deployments/polygon-deployments


* Sushiswap quoterV2 Contract
* https://docs.sushi.com/docs/Products/V3%20AMM/Periphery/Deployment%20Addresses



```SHELL

import { ethers } from 'ethers';
import { abi as QuoterABI } from "@uniswap/v3-periphery/artifacts/contracts/lens/QuoterV2.sol/QuoterV2.json";
import { ERC20Token } from '../constants/tokens';

const sushiQuoterV2Address = "0xb1E835Dc2785b52265711e17fCCb0fd018226a6e";
const uniswapQuoterV2Address = "0x61fFE014bA17989E743c5F6cB21bF9697530B21e";

const quoterContract = new ethers.Contract(sushiQuoterAddress, QuoterABI, provider);

const params = {
    tokenIn: ERC20Token.WETH.address,
    tokenOut: ERC20Token.USDC.address,
    amountIn: ethers.parseUnits("0.01", 18),
    fee: 500,
    sqrtPriceLimitX96: 0,
};

const quotedAmountOut = await quoterContract.quoteExactInputSingle.staticCall(params)


```
