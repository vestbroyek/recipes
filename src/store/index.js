import { recipesApi } from "./apis/recipesApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [recipesApi.reducerPath]: recipesApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(recipesApi.middleware);
    },
});

setupListeners(store.dispatch);

export { useFetchRecipesQuery, useAddRecipeMutation } from './apis/recipesApi';