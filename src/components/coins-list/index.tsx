import React, { useEffect, useState } from 'react'
import { useMarketQuery } from '../../app/services/coinApi'
import { Spinner } from '@heroui/react'
import { CoinCard } from '../coin-card'

export const CoinsList = () => {
  const [page, setPage] = useState(1)
  const [limit] = useState(20)

  const { data, isLoading, isError, error, isSuccess, isFetching } = useMarketQuery({ page, limit })

  const [coins, setCoins] = useState<any[]>([])

  useEffect(() => {
    if (isSuccess && Array.isArray(data)) {
      setCoins(prev => [...prev, ...data])
    }
  }, [data, isSuccess])

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])
  


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
