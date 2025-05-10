import React from 'react'
import { CoinHeader } from '../../components/coin-header'
import { CoinsList } from '../../components/coins-list'

export const Market = () => {
  return (
    <div className='flex flex-col w-full'>
      <CoinHeader />
      <CoinsList />
    </div>
  )
}
