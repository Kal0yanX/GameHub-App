import { apiSlice } from "./apiSlice";

const URL = '/api/scores';

export const scoresApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    save: builder.mutation({
      query: (data) => ({
        url: `${URL}/scores`,
        method: 'POST',
        body: data,
      }),
    }),
    get: builder.mutation({
      query: (data) => ({
        url: `${URL}`,
        params: {
          userId: data, // Use an object for params
        },
        method: 'GET',
      }),
    }),
  }),
});

export const { useSaveMutation, useGetMutation } = scoresApiSlice;
