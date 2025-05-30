import React, { useEffect, useState } from 'react'
import { Spinner } from '@heroui/react'
import { useTrendingQuery } from '../../app/services/coinApi'
import { CoinCardTrending } from '../coin-card-trending'
import { CoinCard } from '../coin-card'


export const CoinsListTrending = () => {
  const [page, setPage] = useState(1)
  const [limit] = useState(20)

  const { data, isLoading, isError, error, isSuccess, isFetching } = useTrendingQuery()

  const [coins, setCoins] = useState<any[]>([])

  useEffect(() => {
    if (isSuccess && Array.isArray(data)) {
      setCoins(prev => [...prev, ...data])
    }
  }, [data, isSuccess])
  coins.map(coin => console.log(coin))



  if (isLoading && coins.length === 0) return <Spinner className="flex justify-center text-6xl" />
  if (isError) return <div className="text-red-500 text-center mt-4">Ошибка: {(error as any)?.message || 'Неизвестно'}</div>

  return (
    <div className="flex flex-col">
      {coins.map(coin => (
        <CoinCard key={coin.id} {...coin} />
      ))}
    </div>
  )
}
