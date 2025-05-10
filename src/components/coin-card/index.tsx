import { Button, Card, CardBody, CardHeader, Divider } from '@heroui/react'
import React, { JSX } from 'react'
import { FaRegStar } from 'react-icons/fa';

type Props = {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    total_volume: number;
    price_change_percentage_24h: number;
    high_24h: number;
    low_24h: number;
    circulating_supply: number;
    max_supply: number;
}

export const CoinCard: React.FC<Props> = ({
    id,
    symbol,
    name,
    image,
    current_price,
    market_cap,
    market_cap_rank,
    total_volume,
    price_change_percentage_24h,
    high_24h,
    low_24h,
    circulating_supply,
    max_supply,

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
            <span className={percentage >= 0 ? 'text-green-500' : 'text-red-500'}>
                {percentage >= 0 ? '+' : ''}
                {formatted}%
            </span>
        )
    }


    return (
        <Card fullWidth radius='none' className="flex flex-row transition hover:shadow-lg cursor-pointer font-bold">
            <CardHeader className=''>
                <div className='flex flex-row w-1/4'>
                    <p>{market_cap_rank}</p>
                    <Divider orientation='vertical' className='mx-8' />
                    <img src={image} alt={name} className='w-8 h-8 rounded-full mr-4' />
                    <div className='mr-8'>
                        <p className='text-base'>{name}</p>
                        <p className='text-sm text-muted-foreground opacity-65'>{symbol.toUpperCase()}</p>
                    </div>
                    <p className='ml-auto my-auto'>{formattedPrice(current_price)}</p>
                </div>

                <div className='flex flex-row items-center w-full ml-8'>
                    <p className='w-1/6'>{formattedPercentage(price_change_percentage_24h)}</p>
                    <p className='text-red-200 w-1/6'>{formattedPrice(low_24h)}</p>
                    <p className='text-green-200 w-1/6'>{formattedPrice(high_24h)}</p>
                    <p className='w-1/6'>{formattedPrice(market_cap)}</p>
                    <p className='w-1/6'>{formattedPrice(total_volume)}</p>
                    {
                        circulating_supply ? (<div className="w-1/6">
                            {/* <p className="text-xs text-muted-foreground mb-1 w-1/6">Supply</p> */}
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


                    <Button 
                        size='sm'
                        color='success'
                    >
                        <FaRegStar />
                    </Button>
                </div>
            </CardHeader>
        </Card>
    )
}
