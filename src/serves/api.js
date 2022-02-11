//1 cách lấy api mới ngoài axios, fetch
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useResultContext } from '../contexts/ResultSearchContext';

const cryptoHeaders = {
    'x-user-agent': 'desktop',
    'x-proxy-location': 'EU',
    'x-rapidapi-host': 'google-search3.p.rapidapi.com',
    'x-rapidapi-key': '92fa813160msha11f7e2d7ff032ep17db1cjsnc98c0e83ce86'
}
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'
const createRequest = (url) => ({ url, headers: cryptoHeaders})
export const googleApi = createApi(
    {
        reducerPath: 'googleApi',
        baseQuery: fetchBaseQuery({ baseUrl }),
        //cái đuôi cua api
        endpoints: (builder) => ({
            getGoogleApi: builder.query({
                query: (endLink) => createRequest( endLink==="/search" ?`${endLink}`: `${endLink}` )
                
            })
        })
    }
)

// này là đặt biến nè phải để trong {} có nghĩa khi biến khac
// { data (api trả về), isLoading } = use...Query
export const {
    useGetGoogleApiQuery
} = googleApi;



