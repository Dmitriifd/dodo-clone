import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from 'types/product';

const API_URL = 'https://seed-uneven-caravel.glitch.me';

export const productsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Products', 'Combo', 'Snacks', 'Deserts', 'Drinks'],
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], string>({
      query: () => `/products`,
      providesTags: ['Products']
    }),
    getCombo: builder.query<any, string>({
      query: () => `/combo`,
      providesTags: ['Combo']
    }),
    getSnacks: builder.query<any, string>({
      query: () => `/snacks`,
      providesTags: ['Snacks']
    }),
    getDeserts: builder.query<any, string>({
      query: () => `/deserts`,
      providesTags: ['Deserts']
    }),
    getDrinks: builder.query<any, string>({
      query: () => `/drinks`,
      providesTags: ['Drinks']
    })
  })
});

export const {
  useGetProductsQuery,
  useGetComboQuery,
  useGetSnacksQuery,
  useGetDesertsQuery,
  useGetDrinksQuery
} = productsApi;
