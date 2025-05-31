export type User = {
    id: string; 
    name: string;
    email: string;
    avatarUrl?: string;
    bio?: string;
    location?: string;
    createdAt: string;
    updatedAt: string;
    //posts: Post[];
    followers: string[];
    following: string[];
    favoriteCoins: string[];
}

export type Coin = {
    id: string;
    symbol: string;
    name: string;
    image: string | { [key: string]: string }; // зависит от API
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    total_volume: number;
    price_change_percentage_24h: number;
    high_24h: number;
    low_24h: number;
    circulating_supply: number;
    max_supply?: number;
    last_updated: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
  };
  

export type Chart = {
    _id?: string;
    coinId: string;
    interval: '1d' | '7d' | '30d' | '90d' | '1y';
    prices: number[][];
    market_caps: number[][];
    total_volumes: number[][];
    createdAt?: string;
    updatedAt?: string;
  }




// UserApi types
export type UserResponse = {
    token: string;
    user: User;
}

export type LoginPayload = {
    email: string;
    password: string;
}

export type RegisterPayoad = {
    name: string;
    email: string;
    password: string;
}
export type UpdateUser = {
    userData: FormData;
    id: string;
}

// CoinApi types

