import { api } from "./api";
import { LoginPayload, RegisterPayoad, UpdateUser, User, UserResponse } from "../types";

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<UserResponse, LoginPayload>({
            query: (userData) => ({
                url: '/login',
                method: 'POST',
                body: userData
            })
        }),
        register: builder.mutation<User, RegisterPayoad>({
            query: (userData) => ({
                url: '/register',
                method: 'POST',
                body: userData
            })
        }),
        current: builder.query<User, void>({
            query: () => ({
                url: '/current',
                method: 'GET'
            })
        }),
        getUserByid: builder.query<User, string>({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'GET'
            })
        }), 
        updateUser: builder.mutation<User, UpdateUser>({
            query: ({userData, id}) => ({
                url: `/update/${id}`,
                method: 'PUT',
                body: userData
            })
        }),
        addToWatchlist: builder.mutation<User, string>({
            query: (id) => ({
                url: `/watchlist/add/${id}`,
                method: 'PATCH'
            })
        }),
        deleteFromWatchlist: builder.mutation<User, string>({
            query: (id) => ({
                url: `/watchlist/delete/${id}`,
                method: 'PATCH'
            })
        }),
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useCurrentQuery, 
    useLazyCurrentQuery,
    useGetUserByidQuery,
    useLazyGetUserByidQuery,
    useUpdateUserMutation,
    useAddToWatchlistMutation,
    useDeleteFromWatchlistMutation,
} = userApi;

export const { 
    endpoints: { login, register, current, getUserByid, updateUser, addToWatchlist, deleteFromWatchlist}
} = userApi;