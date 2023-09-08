import { apiSlice } from "./apiSlice";
import { LOGIN_URL, LOGOUT_URL, PATCH_FCM_TOKEN_URL } from "../config";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: LOGIN_URL,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: LOGOUT_URL,
        method: "POST",
      }),
    }),
    patchToken: builder.mutation({
      query: (data) => ({
        url: PATCH_FCM_TOKEN_URL,
        method: "PATCH",
        body: data
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, usePatchTokenMutation } = userApiSlice;
