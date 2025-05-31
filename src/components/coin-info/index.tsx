import React, { JSX, useState } from 'react'
import { useCoinByIdQuery } from '../../app/services/coinApi'
import { Button, Card, Divider } from '@heroui/react';
import { IoShareSocialSharp } from 'react-icons/io5';
import { SITE_URL } from '../../constants';
import { AlertMessage } from '../alert-message';
import { useSelector } from 'react-redux';
import { selectFavoriteCoins } from '../../features/user/userSlice';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useWatchlist } from '../../app/services/watchlist';


type Props = {
  id: string;
}

export const CoinInfo: React.FC<Props> = ({ id }) => {

  const favoriteCoins = useSelector(selectFavoriteCoins)
  const { toggleWatchlist } = useWatchlist()

  const [alertText, setAlertText] = useState<string>('')
  const [alertColor, setAlertColor] = useState<'primary' | 'danger'>('primary')

  const { data, isLoading } = useCoinByIdQuery(id || '')
  const getImageUrl = (image: string | { [key: string]: string | undefined }): string | undefined => {
    if (!image) return undefined
    if (typeof image === 'string') return image
    return image['small'] || Object.values(image)[0]
  }

  const formattedPrice = (price: number): string => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }
  const formattedPercentage = (percentage: number): JSX.Element => {
    const formatted = percentage.toFixed(2)
    return (
      <span className={percentage >= 0 ? 'text-green-500' : 'text-red-500'}>
        {percentage >= 0 ? '+' : ''}
        {formatted}%
      </span>
    )
  }
  const formatBillions = (num: number) => {
    return `$${(num / 1_000_000_000).toFixed(2)}B`
  }
  const formatSupply = (supply: number): string => {
    if (supply >= 1_000_000_000) {
      return (supply / 1_000_000_000).toFixed(2) + 'B'
    }
    if (supply >= 1_000_000) {
      return (supply / 1_000_000).toFixed(2) + 'M'
    }
    if (supply >= 1_000) {
      return supply.toLocaleString('en-US')
    }
    return supply.toString()
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${SITE_URL}/current-coin/${id}`)
      setAlertText('')
      const timeout = setTimeout(() => {
        setAlertText('Адрес успешно скопирован')
        setAlertColor('primary')
      }, 50)
      return () => clearTimeout(timeout)
    } catch (error) {
      const timeout = setTimeout(() => {
        setAlertText('Адрес не удалось скопировать')
        setAlertColor('danger')
      }, 50)  
      return () => clearTimeout(timeout)
    }
  }

  return (
    <div className='mx-3'>
      <div className='flex'>
        <div className='flex flex-row'>
          <img src={getImageUrl(data?.image || '')} alt={data?.name} className='w-8 h-8 rounded-full my-auto mr-2' />
          <p className='text-semibold font-bold mt-1 mr-1'>{data?.name}</p>
          <p className='text-md text-muted-foreground opacity-65 mt-1 mr-1'>{data?.symbol.toUpperCase()}</p>
          <Card className='px-1 mt-1'>#{data?.market_cap_rank}</Card>
        </div>
        <div className='flex ml-auto space-x-2'>
          <Button size='sm' onClick={() => toggleWatchlist(id)}>
            {
              favoriteCoins?.includes(id) ? <FaStar /> : <FaRegStar />
            }
          </Button>
          <Button onClick={handleCopy} size='sm'>
            <IoShareSocialSharp />
          </Button>
        </div>
      </div>
      <Card className='flex mt-8 gap-4 p-4 font-bold'>{typeof data?.current_price === 'number' && (
        <div className='flex flex-row gap-3'>
          <p className='font-bold text-4xl my-3'>{formattedPrice(data?.current_price) || ''}</p>
          <p className='my-auto'>{formattedPercentage(data?.price_change_percentage_24h) || ''}</p>
        </div>)}
        <Divider />
        <div className='flex flex-col w-full border border-gray-700 rounded-md p-2'>
          <p className='m-auto'>Market Cap</p>
          <p className='m-auto'>{typeof data?.market_cap === 'number' && (
            formatBillions(data?.market_cap)
          )}</p>
        </div>
        <div className='flex flex-col w-full border border-gray-700 rounded-md p-2'>
          <p className='m-auto'>Volume</p>
          <p className='m-auto'>{typeof data?.total_volume === 'number' && (
            formatBillions(data.total_volume)
          )}</p>
        </div>
        <div className='flex flex-row gap-2'>
          <div className='flex flex-col w-full border border-gray-700 rounded-md p-2'>
            <p className='m-auto'>Total supply</p>
            <p className='m-auto'>{typeof data?.circulating_supply === 'number' && (
              formatSupply(data.circulating_supply)
            )}</p>
          </div>
          <div className='flex flex-col w-full border border-gray-700 rounded-md p-2'>
            <p className='m-auto'>Max supply</p>
            {
              data?.max_supply ? (
                typeof data?.max_supply === 'number' && (<p className='m-auto'>{formatSupply(data.max_supply)}</p>)
              ) : (<p className='m-auto'>{'???'}</p>)
            }
          </div>
        </div>
      </Card>
      <AlertMessage color={alertColor} error={alertText}/>
    </div>
  )
}
