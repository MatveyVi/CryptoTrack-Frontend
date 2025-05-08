import React from 'react'

type Props = {
    children: React.ReactElement[] | React.ReactElement
}

export const Container = ({ children } : Props) => {
  return (
    <div className='flex mt-10'>{children}</div>
  )
}
