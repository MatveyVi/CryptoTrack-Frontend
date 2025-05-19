import React from 'react'
import { useCoinByIdQuery } from '../../app/services/coinApi'
import { useParams } from 'react-router-dom'
import { Button, Card } from '@heroui/react';
import { FiStar } from 'react-icons/fi';
import { FaRegStar } from 'react-icons/fa';
import { IoShareSocialSharp } from 'react-icons/io5';

type Props = {
  id: string;
}

export const CoinInfo: React.FC<Props> = ({ id }) => {
  const { data, isLoading } = useCoinByIdQuery(id || '')
  const getImageUrl = (image: string | { [key: string]: string | undefined}): string | undefined => {
    if (!image) return undefined
    if (typeof image === 'string') return image
    return image['small'] || Object.values(image)[0]
  }
  return (
     <div className='flex'>
        <div className='flex flex-row'>
          <img src={getImageUrl(data?.image || '')} alt={data?.name} className='w-8 h-8 rounded-full my-auto mr-2' />
          <p className='text-semibold font-bold mt-1 mr-1'>{data?.name}</p>
          <p className='text-md text-muted-foreground opacity-65 mt-1 mr-1'>{data?.symbol.toUpperCase()}</p>
          <Card className='px-1 mt-1'>#{data?.market_cap_rank}</Card>
        </div>
        <div className='flex ml-auto mr-4 space-x-2'>
          <Button size='sm'>
            <FaRegStar />
          </Button>
          <Button size='sm'>
            <IoShareSocialSharp />
          </Button>
        </div>
     </div>
  )
}
