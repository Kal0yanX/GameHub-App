import { apiSlice } from "./apiSlice";
const URL = '/api/users';

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
        url: `${URL}/scores`,
        params: {
          userId: data,
        },
        method: 'GET',
      }),
    }),
  }),
});

export const { useSaveMutation, useGetMutation } = scoresApiSlice;
