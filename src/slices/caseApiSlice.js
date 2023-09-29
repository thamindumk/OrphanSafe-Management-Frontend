import { apiSlice } from "./apiSlice";
import {
  GET_CASE_LIST_URL,
  CREATE_CASE_URL,
  GET_CASE_BY_CASEID_URL,
} from "../config";

export const caseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCaseList: builder.query({
      query: (data) => ({
        url: GET_CASE_LIST_URL,
        method: "GET",
        // body: data,
      }),
    }),
    getCaseByCaseId: builder.query({
      query: (data) => ({
        url: GET_CASE_BY_CASEID_URL + `?caseId=${data}`,
        method: "GET",
      }),
    }),
    createCase: builder.mutation({
      query: (data) => ({
        url: CREATE_CASE_URL,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetCaseListQuery,
  useCreateCaseMutation,
  useGetCaseByCaseIdQuery,
} = caseApiSlice;
