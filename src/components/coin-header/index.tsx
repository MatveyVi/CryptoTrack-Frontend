import { Button, Card, CardBody, CardHeader, Divider } from '@heroui/react'
import React, { JSX } from 'react'

export const CoinHeader = () => {
    return (
        <Card fullWidth radius='none' className="flex flex-row transition hover:shadow-lg cursor-pointer font-bold">
            <CardHeader className=''>
                <div className='flex flex-row w-1/4'>
                    <p>#</p>
                    <Divider orientation='vertical' className='mx-8' />
                    <div className='mr-8'>Name</div>
                    <p className='ml-auto'>Price</p>
                </div>

                <div className='flex flex-row items-center w-full ml-8'>
                    <p className='w-1/12'>24h%</p>
                    <p className='text-red-400 w-1/12 mr-8'>Low(24h)</p>
                    <p className='text-green-400 w-1/6'>High(24h)</p>
                    <p className='w-1/6 mr-8'>Marketcap</p>
                    <p className='w-1/6'>Volume(24h)</p>
                    <p className='w-1/6 mr-8'>Supply</p>
                    <p>Watchlist</p>
                </div>
            </CardHeader>
        </Card>
    )
}
