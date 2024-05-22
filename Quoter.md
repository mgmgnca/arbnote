* Uniswap quoterV1 Contract
* https://docs.uniswap.org/contracts/v3/reference/deployments/polygon-deployments


```SHELL

import { ethers } from 'ethers';
import { abi as QuoterABI } from "@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json";
import { ERC20Token } from '../constants/tokens';

const uniswapQuoterAddress = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";

const quoterContract = new ethers.Contract(uniswapQuoterAddress, QuoterABI, provider);

const quotedAmountOut = await quoterContract.quoteExactInputSingle.staticCall(
    ERC20Token.WETH.address,
    ERC20Token.USDC.address,
    3000,
    ethers.parseUnits("0.01", 18).toString(),
    0,
)

console.log('quotedAmountOut:', quotedAmountOut)


```
