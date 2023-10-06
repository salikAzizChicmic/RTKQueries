import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `/products`,
    }),
    getProduct: builder.query({
        query: (id) => `/products/${id}`
    }),
    createUser: builder.mutation({
        query: (body) => ({
          url: '/products',
          method: 'POST',
          body:body,
        }),
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const { useGetPokemonByNameQuery, useCreateUserMutation,useLazyGetProductQuery } = pokemonApi