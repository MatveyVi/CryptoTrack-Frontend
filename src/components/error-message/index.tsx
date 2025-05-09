import { Alert } from '@heroui/react'
import React from 'react'

export const ErrorMessage = ({
  error = ''
}: {
  error: string
}) => {
  if (!error) return null

  return (
    <div className='fixed bottom-4 right-4 z-50 w-[300px]'>
      <Alert color="danger" description={<span className='font-bold'>{error}</span>}/>
    </div>
  )
}
