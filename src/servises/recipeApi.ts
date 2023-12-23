import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRecipe } from '../types/types'

export const recipeApi = createApi({
	reducerPath: 'recipeApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
	tagTypes: ['Recipes', 'Recipe'],
	endpoints: (builder) => ({
		getRecipes: builder.query<IRecipe[], null>({
			query: () => ({
				url: '/recipes'
			}),
			providesTags: result => ['Recipes']
		}),
		getRecipe: builder.query<IRecipe, string>({
			query: (id: string) => ({
				url: `/recipes/${id}`	
			}),
			providesTags: result => ['Recipe']
		}),
		addRecipe: builder.mutation<IRecipe, IRecipe>({
			query: (recipe: IRecipe) => ({
				url: '/recipes',
				method: 'POST',
				body: recipe
			}),
			invalidatesTags: ['Recipes']
		})
	})
})

export const { useGetRecipesQuery, useGetRecipeQuery, useAddRecipeMutation } = recipeApi