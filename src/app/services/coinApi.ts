import { Chart, Coin } from "../types";
import { api } from "./api";

export const coinApi = api.injectEndpoints({
    endpoints: (builder) => ({
        market: builder.query<Coin[], { page?: number; limit?: number; timestamp?: any }>({
            query: ({ page = 1, limit = 20, timestamp} = {}) => ({
              url: '/coins/market',
              method: 'GET',
              params: { page, limit },
            }),
          }),
        trending: builder.query<Coin[], void>({
            query: () => ({
                url: '/coins/trending',
                method: 'GET'
            })
        }),
        coinById: builder.query<Coin, string>({
            query: (id) => ({
                url: `/coins/${id}`,
                method: 'GET'
            })
        }),
        chart: builder.query<Chart, { coinId: string; interval: Chart['interval'] }>({
            query: ({ coinId, interval }) => ({
                url: `/coins/${coinId}/chart`,
                method: 'GET',
                params: [ interval ]
            })
        })
    })
})

export const {
    useMarketQuery, 
    useLazyMarketQuery,
    useTrendingQuery, 
    useLazyTrendingQuery,
    useCoinByIdQuery,
    useLazyCoinByIdQuery, 
    useChartQuery, 
    useLazyChartQuery
 } = coinApi;

export const {
    endpoints: { market, trending, coinById, chart }
} = coinApi;