import { apiSlice } from "./apiSlice";
import { GET_SOCIAL_WORKER_NAME_LIST,GET_CHILD_PROFILE_NAME_LIST } from "../config";

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getChildProfileNameList: builder.query({
      query: (data) => ({
        url: GET_CHILD_PROFILE_NAME_LIST,
        method: "GET",
        body: data,
      }),
    }),
    getSocialWorkerNameList: builder.query({
      query: (data) => ({
        url: GET_SOCIAL_WORKER_NAME_LIST,
        method: "GET",
        body: data,
      }),
    }),
  }),
});

export const { useGetChildProfileNameListQuery, useGetSocialWorkerNameListQuery } = profileApiSlice;
