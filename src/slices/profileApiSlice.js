import { apiSlice } from "./apiSlice";
import {
  GET_CHILD_LIST_URL,
  GET_STAFF_LIST_URL,
  GET_SOCIAL_WORKER_LIST_URL,
  GET_PARENT_LIST_URL,
  VIEW_CHILD_PROFILE_URL,
  VIEW_STAFF_PROFILE_URL,
  VIEW_PARENT_PROFILE_URL,
  VIEW_SOCIAL_WORKER_PROFILE_URL,
  VIEW_CHILD_PROFILE_EXTERNAL_URL,
  CREATE_CHILD_PROFILE_URL,
  CREATE_STAFF_PROFILE_URL,
  CREATE_SOCIAL_WORKER_PROFILE_URL,
  CREATE_PARENT_PROFILE_URL,
  CREATE_MANAGER_PROFILE_URL,
  DELETE_CHILD_PROFILE_URL,
  GET_SOCIAL_WORKER_NAME_LIST,
  GET_CHILD_PROFILE_NAME_LIST,
} from "../config";

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * GET profile list
     */
    getChildProfileList: builder.query({
      query: () => ({
        url: GET_CHILD_LIST_URL,
        method: "GET",
        // body: data,
      }),
    }),

    getStaffProfileList: builder.query({
      query: () => ({
        url: GET_STAFF_LIST_URL,
        method: "GET",
        // body: data,
      }),
    }),

    getSocialWorkerProfileList: builder.query({
      query: () => ({
        url: GET_SOCIAL_WORKER_LIST_URL,
        method: "GET",
        // body: data,
      }),
    }),

    getParentProfileList: builder.query({
      query: () => ({
        url: GET_PARENT_LIST_URL,
        method: "GET",
        // body: data,
      }),
    }),

    /**
     * GET profile list by Id
     */

    viewChildProfiles: builder.query({
      query: () => ({
        url: VIEW_CHILD_PROFILE_URL,
        method: "GET",
        // body: data,
      }),
    }),

    viewStaffProfiles: builder.query({
      query: () => ({
        url: VIEW_STAFF_PROFILE_URL,
        method: "GET",
        // body: data,
      }),
    }),

    viewSocialWorkerProfiles: builder.query({
      query: () => ({
        url: VIEW_SOCIAL_WORKER_PROFILE_URL,
        method: "GET",
        // body: data,
      }),
    }),

    viewParentProfiles: builder.query({
      query: () => ({
        url: VIEW_PARENT_PROFILE_URL,
        method: "GET",
        // body: data,
      }),
    }),

    /**
     * POST- Create child profile
     */
    createChildProfile: builder.mutation({
      query: (data) => ({
        url: CREATE_CHILD_PROFILE_URL,
        method: "POST",
        body: data,
      }),
    }),

    
    createStaffProfile: builder.mutation({
      query: (data) => ({
        url: CREATE_STAFF_PROFILE_URL,
        method: "POST",
        body: data,
      }),
    }),

    createSocialWorkerProfile: builder.mutation({
      query: (data) => ({
        url: CREATE_SOCIAL_WORKER_PROFILE_URL,
        method: "POST",
        body: data,
      }),
    }),

    createParentProfile: builder.mutation({
      query: (data) => ({
        url: CREATE_PARENT_PROFILE_URL,
        method: "POST",
        body: data,
      }),
    }),


    /**
     * DELETE- Delete child profile
     */
    deleteChildProfile: builder.mutation({
      query: (data) => ({
        url: DELETE_CHILD_PROFILE_URL,
        method: "DELETE",
        body: data,
      }),
    }),

    getChildProfileNameList: builder.query({
      query: (data) => ({
        url: GET_CHILD_PROFILE_NAME_LIST,
        method: "GET",
      }),
    }),
    getSocialWorkerNameList: builder.query({
      query: (data) => ({
        url: GET_SOCIAL_WORKER_NAME_LIST,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetChildProfileListQuery,
  useGetStaffProfileListQuery,
  useGetSocialWorkerProfileListQuery,
  useGetParentProfileListQuery,
  useViewChildProfilesQuery,
  useViewStaffProfilesQuery,
  useViewSocialWorkerProfilesQuery,
  useViewParentProfilesQuery,
  useCreateStaffProfileMutation,
  useCreateSocialWorkerProfileMutation,
  useCreateParentProfileMutation,
  useCreateChildProfileMutation,
  useDeleteChildProfileMutation,
  useGetChildProfileNameListQuery,
  useGetSocialWorkerNameListQuery,
} = profileApiSlice;
