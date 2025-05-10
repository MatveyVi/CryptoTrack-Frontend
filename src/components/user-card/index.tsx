import { User } from '@heroui/react'
import React from 'react'
import { BASE_URL } from '../../constants'

type Props = {
    name: string;
    avatarUrl: string;
    description?: string;
    className?: string;
}

export const UserCard: React.FC<Props> = ({
    name,
    avatarUrl,
    description,
    className
}) => {
    return (
        <User
            name={name}
            description={description}
            className={className}
            avatarProps={{
                src: `${BASE_URL}${avatarUrl}`
            }}
        />
  )
}
