import React from 'react'
import { CoinCard } from '../../components/coin-card'
import { CoinHeader } from '../../components/coin-header'

export const Market = () => {
  return (
    <div className='flex flex-col w-full'>
      <CoinHeader />
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
        marketcap={227437312312}
        volume={1312312312}
        high_24h={120000}
        low_24h={99000}
      ></CoinCard>
      <CoinCard
        id='gala'
        circulating_supply={44353163128.26034}
        max_supply={50000000000}
        marketcap_rank={1}
        icon='https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'
        name='Bitcoin'
        symbol='BTC'
        price={0.0199619}
        percentage={3.85933}
        marketcap={227437312312}
        volume={127870964}
        high_24h={0.02047874}
        low_24h={0.01893009}
      ></CoinCard>
    </div>
  )
}
