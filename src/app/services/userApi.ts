import { api } from "./api";
import { LoginPayload, UserResponse } from "../types";

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<UserResponse, LoginPayload>({
            query: (userData) => ({
                url: '/login',
                method: 'POST',
                body: userData
            })
        })
        //register:
    })
})