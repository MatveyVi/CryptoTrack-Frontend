import { Alert } from '@heroui/react'
import { color } from 'chart.js/helpers'
import React, { useEffect, useState } from 'react'

type Props = {
  error?: string;
  color?: 'danger' | 'primary';
}

export const AlertMessage: React.FC<Props> = ({
  error = '',
  color = 'danger',
}) => {
  useEffect(() => {
    setAlertMessage(error)
    console.log('setted')
    const timeout = setTimeout(() => {
      setAlertMessage('')
    }, 3 * 1000)
    return () => clearInterval(timeout)
  }, [error])

  const [alertMessage, setAlertMessage] = useState<string>('')
  

  if (!alertMessage) return null

  return (
    <div className='fixed bottom-4 right-4 z-50 w-[300px]'>
      <Alert color={color} description={<span className='font-bold'>{alertMessage}</span>}/>
    </div>
  )
}
