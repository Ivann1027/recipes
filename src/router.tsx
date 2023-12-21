import { Navigate, createBrowserRouter } from "react-router-dom"
import App from "./App"
import RecipePage from "./components/RecipePage"
import RecipeList from "./components/RecipeList"
import Error from "./components/Error"

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '',
				element: <Navigate to='recipes' /> 
			},
			{
				path: '/recipes',
				element: <RecipeList />,
				errorElement: <Error />
			},
			{
				path: '/recipes/:id',
				element: <RecipePage />
			}
		]
	},
	// {
	// 	path: '/recipes/:id',
	// 	element: <RecipePage />
	// }
])