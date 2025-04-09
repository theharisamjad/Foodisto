import { api } from "./api";
import { endPoints } from "../constants/endPoints";
import { PizzaItem, DessertItem, PizzaData, DessertData } from "../types/types";

// Debug log for endpoints

// Extend the base API with home-specific endpoints
export const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPizzas: builder.query<PizzaData, void>({
      query: () => {
        return {
          url: endPoints.getAllPizzas,
        };
      },
      transformResponse: (response: PizzaData) => {
        return response;
      },
    }),

    getAllDesserts: builder.query<DessertData, void>({
      query: () => endPoints.getAllDesserts,
      transformResponse: (response: DessertData) => response,
    }),

    getPizzaById: builder.query<PizzaItem, string>({
      query: (id) => ({
        url: endPoints.getPizzaById,
        params: { id },
      }),
      transformResponse: (response: PizzaItem) => response,
    }),

    getDessertById: builder.query<DessertItem, string>({
      query: (id) => ({
        url: endPoints.getDessertById,
        params: { id },
      }),
      transformResponse: (response: DessertItem) => response,
    }),
  }),
});

// Export hooks for use in components
export const {
  useGetAllPizzasQuery,
  useGetAllDessertsQuery,
  useGetPizzaByIdQuery,
  useGetDessertByIdQuery,
} = homeApi;
