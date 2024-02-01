import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { METHODS, DATAURLS } from "../constants";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_DATA_URL}`,
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
    getInterestsList: builder.query({
      query: () => ({
        url: DATAURLS.GETINTERESTS,
        method: METHODS.GET,
      }),
    }),
    getSkillsList: builder.query({
      query: () => ({
        url: DATAURLS.GETSKILLS,
        method: METHODS.GET,
      }),
    }),
    getQuestionnaire: builder.query({
      query: () => ({
        url: DATAURLS.GETQUESTIONS,
        method: METHODS.GET,
      }),
    }),

    postUserInterests: builder.mutation({
      query: (payload) => ({
        url: DATAURLS.POSTINTERESTS,
        method: METHODS.POST,
        body: { interests: payload },
      }),
    }),
    postUserSkills: builder.mutation({
      query: (payload) => ({
        url: DATAURLS.POSTSKILLS,
        method: METHODS.POST,
        body: { skills: payload },
      }),
    }),
    postQuestionnaireAnswer: builder.mutation({
      query: (payload) => ({
        url: DATAURLS.POSTQUESTIONS,
        method: METHODS.POST,
        body: { questions: payload },
      }),
    }),
  }),
});

export const {
  useGetInterestsListQuery,
  useGetSkillsListQuery,
  useGetQuestionnaireQuery,
  usePostUserInterestsMutation,
  usePostUserSkillsMutation,
  usePostQuestionnaireAnswerMutation,
} = dataApi;
