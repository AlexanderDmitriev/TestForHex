import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dishesApi = createApi({
  reducerPath: 'dishesList',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/',
  }),
  tagTypes: ['Dish'],
  endpoints: builder => ({
    postDishes: builder.mutation({
      query: ({ name, preparation_time, type, ...additionalData }) => ({
        url: `/`,
        method: 'POST',
        body: {
          name,
          preparation_time,
          type,
          ...additionalData,
        },
      }),
      invalidatesTags: ['Dish'],
    }),
  }),
});

export const { usePostDishesMutation } = dishesApi;
