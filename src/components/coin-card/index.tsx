import { Button, Card, CardBody, CardHeader, Divider } from '@heroui/react'
import React, { JSX } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectFavoriteCoins } from '../../features/user/userSlice';
import { useAddToWatchlistMutation, useDeleteFromWatchlistMutation } from '../../app/services/userApi';

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

    const favoriteCoins = useSelector(selectFavoriteCoins)
    const [triggerAddToWatchlist] = useAddToWatchlistMutation()
    const [triggerDeleteFromWatchlist] = useDeleteFromWatchlistMutation()

    const navigate = useNavigate()

    const formattedPrice = (price?: number): string => {
        if (price === undefined || price === null || isNaN(price)) return '—'
        return price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        })
    }

    const formattedPercentage = (percentage?: number): JSX.Element => {
        if (percentage === undefined || percentage === null || isNaN(percentage)) {
            return <span>—</span>
        }
        const formatted = percentage.toFixed(2)
        return (
            <span className={percentage >= 0 ? 'text-green-500' : 'text-red-500'}>
                {percentage >= 0 ? '+' : ''}
                {formatted}%
            </span>
        )
    }

    const supplyPercent = (circulating_supply && max_supply && max_supply > 0)
        ? (circulating_supply / max_supply) * 100
        : 0
    const handleWatchlist = async () => {
        try {
            favoriteCoins?.includes(id) ? await triggerDeleteFromWatchlist(id).unwrap() : await triggerAddToWatchlist(id).unwrap()
        } catch (error) {
            console.log('Ошибка при добавлении/удалении в/из вотчлиста', error)
        }
    }

    return (
        <div
            onClick={() => {
                navigate(`/current-coin/${id}`)
                console.log("Navigate")
            }}
        >
            <Card fullWidth radius='none' className="flex flex-row transition hover:shadow-lg cursor-pointer font-bold">
                <CardHeader className=''>
                    <div className='flex flex-row w-1/4'>
                        <p className='my-auto'>{market_cap_rank ?? '—'}</p>
                        <Divider orientation='vertical' className='mx-3' />
                        {image ? (
                            <img src={image} alt={name || symbol} className='w-8 h-8 rounded-full my-auto mr-4' />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-300 my-auto mr-4" />
                        )}
                        <div className='mr-8'>
                            <p className='text-base'>{name || 'Unknown'}</p>
                            <p className='text-sm text-muted-foreground opacity-65'>{symbol?.toUpperCase() || 'N/A'}</p>
                        </div>
                        <p className='ml-auto my-auto'>{formattedPrice(current_price)}</p>
                    </div>

                    <div className='flex flex-row items-center w-full ml-8'>
                        <p className='w-1/12'>{formattedPercentage(price_change_percentage_24h)}</p>
                        <p className='text-red-400 w-1/12 mr-8'>{formattedPrice(low_24h)}</p>
                        <p className='text-green-400 w-1/6'>{formattedPrice(high_24h)}</p>
                        <p className='w-1/6 mr-8'>{formattedPrice(market_cap)}</p>
                        <p className='w-1/6'>{formattedPrice(total_volume)}</p>

                        {circulating_supply && max_supply && max_supply > 0 ? (
                            <div className="w-1/6 mr-8">
                                <div className="w-full h-2 bg-muted rounded-full">
                                    <div
                                        className="h-2 bg-blue-600 rounded-full"
                                        style={{
                                            width: `${supplyPercent}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        ) : (
                            <p>Supply</p>
                        )}
                        <Button
                            onClick={handleWatchlist}
                            className='ml-auto'
                            size='sm'
                            color='success'
                        >
                            {
                                favoriteCoins?.includes(id) ? <FaStar /> : <FaRegStar />
                            }
                        </Button>
                    </div>
                </CardHeader>
            </Card>
        </div>
    )
}

