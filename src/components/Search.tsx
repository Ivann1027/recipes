import { useLocation, Link } from "react-router-dom"
import { useGetRecipesQuery } from "../servises/recipeApi"
import { IRecipe } from "../types/types"
import '../css/recipes.css'
import RecipeItem from "./RecipeItem"
import SortCategories from "./SortCategories"

const Search = () => {

	const { data: recipes } = useGetRecipesQuery(null)
	const categories: string[] = Array.from(new Set(recipes?.flatMap(recipe => recipe.category)))
	const location = useLocation()
	const query: string = location.state.query

	const requiredRecipes =	recipes?.filter(recipe => {
		return recipe.name.toLowerCase().includes(query.toLowerCase())
	})
	

	return (
		<section>
			<SortCategories categories={categories} />
			<section className="recipeList">
				{requiredRecipes && requiredRecipes.map((recipe: IRecipe) => (
					<Link to={`/recipes/${recipe.id}`} key={recipe.id}>
						<RecipeItem recipe={recipe} />
					</Link>
				))}
			</section>
		</section>
	)
}

export default Search