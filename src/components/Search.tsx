import { useLocation, Link } from "react-router-dom"
import { useGetRecipesQuery } from "../servises/recipeApi"
import { IRecipe } from "../types/types"
import '../styles/recipes.scss'
import RecipeItem from "./RecipeItem"

const Search = () => {

	const { data: recipes } = useGetRecipesQuery(null)
	const location = useLocation()
	const query: string = location.state.query

	const requiredRecipes =	recipes?.filter(recipe => {
		return recipe.name.toLowerCase().includes(query.toLowerCase())
	})
	

	return (
		<section className="recipeList">
			{requiredRecipes && requiredRecipes.map((recipe: IRecipe) => (
				<Link to={`/recipes/${recipe.id}`} key={recipe.id}>
					<RecipeItem recipe={recipe} />
				</Link>
			))}
		</section>
	)
}

export default Search