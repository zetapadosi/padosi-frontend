import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const padosiApi = createApi({
  reducerPath: "padosiApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://padosi-backend.herokuapp.com/api/" }),
  endpoints: (builder) => ({
    getWallPosts: builder.query({
      query: (user) => `auth/login`,
    }),
  }),
});

export const { useGetWallPostsQuery } = padosiApi;
