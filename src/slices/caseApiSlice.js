import { apiSlice } from "./apiSlice";
import { GET_CASE_LIST_URL } from "../config";

export const caseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCaseList: builder.mutation({
      query: (data) => ({
        url: GET_CASE_LIST_URL,
        method: "GET",
        // body: data,
      }),
    }),
  }),
});

export const { useGetCaseListMutation } = caseApiSlice;
