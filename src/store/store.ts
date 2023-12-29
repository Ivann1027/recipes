import { configureStore } from "@reduxjs/toolkit"
import { recipeApi } from "../servises/recipeApi"
import { userApi } from "../servises/userApi"
import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware"

export const store = configureStore({
	reducer: {
		[recipeApi.reducerPath]: recipeApi.reducer,
		[userApi.reducerPath]: userApi.reducer
	},
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(recipeApi.middleware, userApi.middleware)
})