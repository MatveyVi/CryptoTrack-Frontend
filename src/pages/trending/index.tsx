import React from 'react'
import { CoinHeader } from '../../components/coin-header'
import { CoinsListTrending } from '../../components/coins-list-trending'

export const Trending = () => {
  return (
    <div className='flex flex-col w-full'>
      <CoinHeader />
      <CoinsListTrending />
    </div>
  )
}
