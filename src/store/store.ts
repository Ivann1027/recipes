import { configureStore } from "@reduxjs/toolkit"
import { recipeApi } from "../servises/recipeApi"
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware"

export const store = configureStore({
	reducer: {
		[recipeApi.reducerPath]: recipeApi.reducer
	},
	middleware: (buildGetDefaultMiddleware) => 
		buildGetDefaultMiddleware().concat(recipeApi.middleware)
})