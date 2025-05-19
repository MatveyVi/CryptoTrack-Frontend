import React from 'react'
import { GoBack } from '../../components/go-back'
import { useChartQuery, useCoinByIdQuery } from '../../app/services/coinApi'
import { useParams } from 'react-router-dom'
import { Charts } from '../../components/charts'
import { Spinner } from '@heroui/react'
import { CoinInfo } from '../../components/coin-info'

type Props = {

}


export const CurrentCoin: React.FC<Props> = ({

}) => {
  const { id } = useParams<{ id: string }>()
  return (
    <div className='flex w-full'>
      <div className='w-1/4'>
        <CoinInfo id={id || ''}/>
      </div>
      <div className="w-3/4 h-full bg-[#19172c] dark:bg-gray-900 rounded-2xl p-4 shadow justify-end ml-auto">
        <Charts id={id || ''}/>
      </div>
    </div>
  )
}
 