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
            addRecipe: builder.mutation({
                query: (recipe) => {
                    return {
                        url: "/recipes",
                        method: "POST",
                        body: {
                            id: recipe.id,
                            title: recipe.title,
                            ingredients: recipe.ingredients,
                            method: recipe.method,
                            notes: recipe.notes,
                            rating: recipe.rating
                        },
                    };
                },
            }),
            deleteRecipe: builder.mutation({
                query: (recipe) => {
                    return {
                        url: `/recipes/${recipe.id}`,
                        method: "DELETE"
                    };
                },
            }),
        };
    },
});

export const { 
    useFetchRecipesQuery, 
    useAddRecipeMutation,
    useDeleteRecipeMutation
} = recipesApi;
export { recipesApi };