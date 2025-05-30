import React from 'react'
import { CoinHeader } from '../../components/coin-header'
import { CoinsListMarket } from '../../components/coins-list-market'

export const Market = () => {
  return (
    <div className='flex flex-col w-full'>
      <CoinHeader />
      <CoinsListMarket />
    </div>
  )
}
