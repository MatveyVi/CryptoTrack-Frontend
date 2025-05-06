import { api } from "./api";
import { LoginPayload, User, UserResponse } from "../types";

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginPayload, UserResponse>({
            query: (userData) => ({
                url: '/login',
                method: 'POST',
                body: userData
            })
        })
        //register:
    })
})