import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { METHODS, PROFILEURLS } from "../constants";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_PROFILE_URL}`,
    prepareHeaders: (headers) => {
      const authToken = localStorage.getItem("authToken");
      if (authToken) {
        headers.set("Authorization", `Bearer ${authToken}`);
      }
      headers.set("Content", "Content-Type:application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getUserSkillsInterests: builder.query({
      query: () => ({
        url: PROFILEURLS.GETSKILLSINTERESTS,
        method: METHODS.GET,
        keepUnusedDataFor: 5,
      }),
    }),
    getQuestionnaireResponse: builder.query({
      query: () => ({
        url: PROFILEURLS.GETQUESTIONRESPONSES,
        method: METHODS.GET,
      }),
    }),
    postUserRole: builder.mutation({
      query: (payload) => ({
        url: PROFILEURLS.POSTUSERPROFILE,
        method: METHODS.PUT,
        body: { role: payload },
      }),
    }),
  }),
});

export const {
  useGetUserSkillsInterestsQuery,
  useGetQuestionnaireResponseQuery,
  usePostUserRoleMutation,
} = profileApi;
