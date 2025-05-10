import { Button, Card, CardBody, CardHeader, Divider } from '@heroui/react'
import React, { JSX } from 'react'

type Props = {
    id: string;
    circulating_supply: number;
    max_supply: number;
    marketcap_rank: number;
    icon: string;
    name: string;
    symbol: string;
    price: number;
    percentage: number;
    marketcap: number;
    volume: number;
    high_24h: number;
    low_24h: number;
}

export const CoinCard: React.FC<Props> = ({
    id,
    circulating_supply,
    max_supply,
    marketcap_rank,
    icon,
    name,
    symbol,
    price,
    percentage,
    marketcap,
    volume,
    high_24h,
    low_24h,

}) => {
    const formattedPrice = (price: number): string => {
        return price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        })
    }
    const formattedPercentage = (percentage: number): JSX.Element => {
        const formatted = percentage.toFixed(2)
        return (
            <p className={percentage >= 0 ? 'text-green-500' : 'text-red-500'}>
                {percentage >= 0 ? '+' : ''}
                {formatted}%
            </p>
        )
    }


    return (
        <Card fullWidth radius='none' className="flex flex-row transition hover:shadow-lg cursor-pointer font-bold">
            <CardHeader className=''>
                <div className='flex flex-row w-1/4'>
                    <p>{marketcap_rank}</p>
                    <Divider orientation='vertical' className='mx-8' />
                    <img src={icon} alt={name} className='w-8 h-8 rounded-full mr-4' />
                    <div className='mr-8'>
                        <p className='text-base'>{name}</p>
                        <p className='text-sm text-muted-foreground opacity-65'>{symbol.toUpperCase()}</p>
                    </div>
                    <p className='ml-auto'>{formattedPrice(price)}</p>
                </div>

                <div className='flex flex-row items-center w-full ml-8'>
                    <p className='w-1/6'>{formattedPercentage(percentage)}</p>
                    <p className='text-red-400 w-1/6'>{formattedPrice(low_24h)}</p>
                    <p className='text-green-400 w-1/6'>{formattedPrice(high_24h)}</p>
                    <p className='w-1/6'>{formattedPrice(marketcap)}</p>
                    <p className='w-1/6'>{formattedPrice(volume)}</p>
                    {
                        circulating_supply ? (<div className="w-1/6">
                            <p className="text-xs text-muted-foreground mb-1 w-1/6">Supply</p>
                            <div className="w-full h-2 bg-muted rounded-full">
                                <div
                                    className="h-2 bg-blue-600 rounded-full"
                                    style={{
                                        width: `${(circulating_supply / max_supply) * 100}%`,
                                    }}
                                />
                            </div>
                        </div>) : (<p>Supply</p>)
                    }


                    <Button>
                        Watchlist
                    </Button>
                </div>
            </CardHeader>
        </Card>
    )
}
