import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { endPoints } from "../constants/endPoints";
import Constants from "expo-constants";

const RAPIDAPI_KEY = Constants.expoConfig?.extra?.rapidApiKey;
const RAPIDAPI_HOST = Constants.expoConfig?.extra?.rapidApiHost;

// Create the base API
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: endPoints.baseUrl,
    prepareHeaders: (headers, { getState }) => {
      // Get the token from the state if needed
      // const token = (getState() as RootState).auth.token;

      // Set the RapidAPI headers
      headers.set("X-RapidAPI-Key", RAPIDAPI_KEY || "");
      headers.set("X-RapidAPI-Host", RAPIDAPI_HOST || "");

      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default api;
