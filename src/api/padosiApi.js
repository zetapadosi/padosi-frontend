import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const padosiApi = createApi({
  reducerPath: "padosiApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://padosi-backend.herokuapp.com/api/",
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${Cookies.get("t")}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getWallPosts: build.query({
      query: (userId) => `post/wall/${userId}?page=0&limit=10`,
      transformResponse: (response) => response.value,
      providesTags: (result, error, id) => [{ type: "Post", id }],
    }),
  }),
});

export const { useGetWallPostsQuery } = padosiApi;
