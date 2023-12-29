import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IUser, ICurrentUser } from "../types/types"

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
	tagTypes: ['Users'],
	endpoints: (builder) => ({
		getUsers: builder.query<IUser[], null>({
			query: () => ({
				url: '/users'
			}),
			providesTags: result => ['Users'] 
		}),
		addUser: builder.mutation<ICurrentUser, IUser>({
			query: (user) => ({
				url: '/users',
				method: 'POST',
				body: user
			}),
			invalidatesTags: ['Users']
		})
	})
})

export const { useAddUserMutation } = userApi