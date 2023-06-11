import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from 'types/product';

const API_URL = 'https://seed-uneven-caravel.glitch.me';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], string>({
      query: () => `/products`,
      providesTags: ['Products']
    })
  })
});

export const { useGetProductsQuery } = productsApi;
