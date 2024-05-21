# arbnote

token address တစ်ခု ရလျှင်
etherscan > read contract
WETH address 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
![alt text](https://github.com/mgmgnca/arbnote/blob/main/images/etherscan_contract.png?raw=true)

```SHELL
    const tokenAbi = [
        "function name() view returns (string)",
        "function symbol() view returns (string)",
        "function decimals() view returns (uint)"
    ]
```


pool address တစ်ခုကို ရလျှင်
etherscan > read contract

![alt text](https://github.com/mgmgnca/arbnote/blob/main/images/etherscan_pool.png?raw=true)

```SHELL
    const poolAbi = [
        'function token0() external view returns (address)',
        'function token1() external view returns (address)',
        'function fee() external view returns (uint24)'
    ]
```

quoter address တစ်ခုကို ရလျှင်
etherscan > write contract

![alt text](https://github.com/mgmgnca/arbnote/blob/main/images/etherscan_quote.png?raw=true)

```SHELL
    quotedAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
        inputTokenA,
        inputTokenB,
        tokenFee,
        amountIn,
        0
    )
```