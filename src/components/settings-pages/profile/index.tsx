import React, { useState } from 'react'
import { User } from '../../../app/types'
import { Input } from '../../input'

type Props = {
  user?: User
}

export const ProfileSettings: React.FC<Props> = ({
  user
}) => {
  const [error, setError] = useState('')
  return (
    <form
      className='flex flex-col gap-1'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input /> 
      {/* посмотреть в туторе */}
    </form>
  )
}
