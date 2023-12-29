import { Navigate, createBrowserRouter } from "react-router-dom"
import App from "./App"
import RecipePage from "./components/RecipePage"
import RecipeList from "./components/RecipeList"
import Error from "./components/Error"
import Search from "./components/Search"
import Sorted from "./components/Sorted"
import AddingRecipe from "./components/AddingRecipe"
import LogIn from "./components/register/LonIn"
import SignUp from "./components/register/SignUp"

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
			},
			{
				path: '/search',
				element: <Search />
			},
			{
				path: '/sorted',
				element: <Sorted />
			},
			{
				path: '/add-recipe',
				element: <AddingRecipe />
			},
			{
				path: '/login',
				element: <LogIn />
			},
			{
				path: '/signup',
				element: <SignUp />
			}
		]
	},
	// {
	// 	path: '/recipes/:id',
	// 	element: <RecipePage />
	// }
])