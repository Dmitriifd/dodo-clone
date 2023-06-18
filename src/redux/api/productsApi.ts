import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from 'types/product';

const API_URL = 'https://seed-uneven-caravel.glitch.me';

export const productsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => `/products`,
    }),
    getCombo: builder.query<any, void>({
      query: () => `/combo`,
    }),
    getSnacks: builder.query<any, void>({
      query: () => `/snacks`,
    }),
    getDeserts: builder.query<any, void>({
      query: () => `/deserts`,
    }),
    getDrinks: builder.query<any, void>({
      query: () => `/drinks`,
    }),
  })
});

export const {
  useGetProductsQuery,
  useGetComboQuery,
  useGetSnacksQuery,
  useGetDesertsQuery,
  useGetDrinksQuery
} = productsApi;
