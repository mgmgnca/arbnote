1. fetch Pools from GraphQL or resturl

2. Sort by tvlUSD in descending order

3. Filter Top By Base Token Group

4. Filter Top By Quote Token Group

5. Top 2 Direct Swap Pool Group

// Main reason we need this is for gas estimates, only needed if token out is not native.
// We don't check the seen address set because if we've already added pools for getting native quotes
// theres no need to add more.
6. Top 2 ETH Quote Token Pool