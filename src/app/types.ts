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
}

export type Coin = {
    id: string;
    symbol: string;
    name: string;
    image: string | { [key: string] : string };
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    total_volume: number;
    price_change_percentage_24h: number;
    createdAt: string;
    updatedAt: string;
}






// api types
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