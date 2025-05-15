import React from 'react'
import { GoBack } from '../../components/go-back'
import { useChartQuery, useCoinByIdQuery } from '../../app/services/coinApi'
import { useParams } from 'react-router-dom'
import { Charts } from '../../components/charts'
import { Spinner } from '@heroui/react'

type Props = {

}


export const CurrentCoin: React.FC<Props> = ({

}) => {
  const { id } = useParams<{ id: string }>()
  return (
    <div className='w-1/2'>
      <div className="w-full h-full bg-[#19172c] dark:bg-gray-900 rounded-2xl p-4 shadow">
        <Charts id={id || ''}/>
      </div>
    </div>
  )
}
