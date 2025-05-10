import React from 'react'
import { CoinCard } from '../../components/coin-card'

export const Market = () => {
  return (
    <CoinCard
      id='bitcoin'
      circulating_supply={19862815}
      max_supply={21000000}
      marketcap_rank={1}
      icon='https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'
      name='Bitcoin'
      symbol='BTC'
      price={10000}
      percentage={+12.2}
      marketcap={2384390239}
      volume={13123123}
      high_24h={120000}
      low_24h={99000}
    ></CoinCard>
  )
}
