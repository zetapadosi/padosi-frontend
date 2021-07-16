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
  tagTypes: ["Post"],
  endpoints: (build) => ({
    getWallPosts: build.query({
      query: ({ userId, page }) => `post/wall/${userId}?limit=3&page=${page}`,
      transformResponse: (response) => response.value,
      providesTags: (result, error, id) => [{ type: "Post", id }],
    }),
    createPost: build.mutation({
      query: ({ id, postBody }) => ({
        url: `post/create/${id}`,
        method: "POST",
        body: postBody,
      }),
    }),
  }),
});

export const { useGetWallPostsQuery, useCreatePostMutation } = padosiApi;
