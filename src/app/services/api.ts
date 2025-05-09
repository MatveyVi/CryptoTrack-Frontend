import { createApi, FetchArgs, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).user.token || localStorage.getItem('token')

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }

        return headers
    }
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

const baseQueryWithAuthRedirect = async (args: string | FetchArgs, api: any, extraOptions: any) => {
    const result = await baseQueryWithRetry(args, api, extraOptions);
  
    if (result?.error?.status === 401) {
      window.location.href = "/auth"; // сервер вернул 401 то редиректим на страницу авторизации
    }
  
    return result;
  };

export const api = createApi({
    reducerPath: 'splitApi',
    baseQuery: baseQueryWithAuthRedirect,
    refetchOnMountOrArgChange: true, 
    endpoints: () => ({})
})