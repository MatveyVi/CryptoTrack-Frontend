import React from 'react'
import { GoBack } from '../../components/go-back'
import { useCoinByIdQuery } from '../../app/services/coinApi'
import { useParams } from 'react-router-dom'

type Props = {

}


export const CurrentCoin: React.FC<Props> = ({
  
}) => {
  const {id} = useParams<{id: string}>()

  const {data, isLoading} = useCoinByIdQuery(id || '')

  return (
    <div>
          {/* Нужно вставить компонент графика и компонент правой части с информацией */}
    </div>
  )
}
