import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const recipesApi = createApi({
    reducerPath: "recipes",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
    }),
    endpoints(builder) {
        return {
            fetchRecipes: builder.query({
                // TODO: add providesTags
                query: () => {
                    return {
                        url: "/recipes",
                        method: "GET"
                    };
                }
            }),
        };
    },
});

export const { useFetchRecipesQuery } = recipesApi;
export { recipesApi };