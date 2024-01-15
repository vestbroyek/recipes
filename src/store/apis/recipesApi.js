import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const recipesApi = createApi({
    reducerPath: "recipes",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
    }),
    endpoints(builder) {
        return {
            fetchRecipes: builder.query({
                providesTags: ["Recipe"],
                query: () => {
                    return {
                        url: "/recipes",
                        method: "GET"
                    };
                }
            }),
            addRecipe: builder.mutation({
                invalidatesTags: ["Recipe"],
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
                invalidatesTags: ["Recipe"],
                query: (recipe) => {
                    return {
                        url: `/recipes/${recipe.id}`,
                        method: "DELETE"
                    };
                },
            }),
            editRecipe: builder.mutation({
                invalidatesTags: ["Recipe"],
                query: (recipe) => {
                    return {
                        url: `/recipes/${recipe.id}`,
                        method: "PATCH",
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
        };
    },
});

export const { 
    useFetchRecipesQuery, 
    useAddRecipeMutation,
    useDeleteRecipeMutation,
    useEditRecipeMutation
} = recipesApi;
export { recipesApi };