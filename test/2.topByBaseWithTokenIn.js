/**
 * TokenIn 0x2791bca1f2de4661ed88a30c99a7a9449aa84174
 * TokenOut 0x7ceb23fd6bc0add59e62ac25578270cff1b9f619
 * 
 * 
 * export const USDC_POLYGON = new Token(
    ChainId.POLYGON,
    '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      6,  
    'USDC',
    'USD//C.e'
  );


  //polygon tokens
    export const WMATIC_POLYGON = new Token(
      ChainId.POLYGON,
      '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      18,
      'WMATIC',
      'Wrapped MATIC'
    );

    POLYGON ရဲ့ BASE TOKEN သည် usdc နဲ့ wmatic ဖြစ်
    token 0 သည် base token ထဲက တစ်ခုခု ဖြစ်ရမယ် Wmatic or usdce
    token 1 သည် TokenIn ဖြစ်ရမယ်
 */

[
    {
      id: '0xA374094527e1673A86dE625aa59517c5dE346d32',
      feeTier: '500',
      liquidity: '9231116465369908139',
      token0: { id: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270' },
      token1: { id: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174' },
      tvlETH: 9231116465369907000,
      tvlUSD: 9231116465369907000
    },
    {
      id: '0x88f3C15523544835fF6c738DDb30995339AD57d6',
      feeTier: '3000',
      liquidity: '1933909626590071847',
      token0: { id: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270' },
      token1: { id: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174' },
      tvlETH: 1933909626590071800,
      tvlUSD: 1933909626590071800
    },
    {
      id: '0x67e708986a809aCefDe16f2417FA5701241E3935',
      feeTier: '10000',
      liquidity: '77894320652051081',
      token0: { id: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270' },
      token1: { id: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174' },
      tvlETH: 77894320652051090,
      tvlUSD: 77894320652051090
    }
  ]