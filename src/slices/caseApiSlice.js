import { apiSlice } from "./apiSlice";
import {
  GET_CASE_LIST_URL,
  CREATE_CASE_URL,
  GET_CASE_BY_CASEID_URL,
  GET_CASE_INVITATION_BY_USER_ID_URL,
  UPDATE_CASE_STATE_URL,
  GET_CASE_LIST_BY_USERID_URL,
  CREATE_CASE_LOG_URL,
  GET_CASE_LOGS_LIST_URL,
  DELETE_CASE_LOG_URL,
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
    getCaseListByUserId: builder.query({
      query: (data) => ({
        url: GET_CASE_LIST_BY_USERID_URL,
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
    createCaseLog: builder.mutation({
      query: (data) => ({
        url: CREATE_CASE_LOG_URL,
        method: "POST",
        body: data,
      }),
    }),
    deleteCaseLog: builder.mutation({
      query: (data) => ({
        url: DELETE_CASE_LOG_URL,
        method: "DELETE",
        body: data,
      }),
    }),
    getCaseInvitationByUserId: builder.query({
      query: (data) => ({
        url: GET_CASE_INVITATION_BY_USER_ID_URL,
        method: "GET",
      }),
    }),

    getCaseLogs: builder.query({
      query: (data) => ({
        url: GET_CASE_LOGS_LIST_URL + `?caseId=${data}`,
        method: "GET",
      }),
    }),
    updateCaseState: builder.mutation({
      query: (data) => ({
        url: UPDATE_CASE_STATE_URL,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetCaseListQuery,
  useCreateCaseMutation,
  useGetCaseByCaseIdQuery,
  useGetCaseInvitationByUserIdQuery,
  useUpdateCaseStateMutation,
  useGetCaseListByUserIdQuery,
  useCreateCaseLogMutation,
  useGetCaseLogsQuery,
  useDeleteCaseLogMutation
} = caseApiSlice;
