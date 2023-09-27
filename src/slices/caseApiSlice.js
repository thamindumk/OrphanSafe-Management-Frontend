import { apiSlice } from "./apiSlice";
import { GET_CASE_LIST_URL } from "../config";

export const caseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCaseList: builder.query({
      query: (data) => ({
        url: GET_CASE_LIST_URL,
        method: "GET",
        // body: data,
      }),
    }),
  }),
});

export const { useGetCaseListQuery } = caseApiSlice;
