import RecipeItem from "./RecipeItem"
import { useLocation } from "react-router-dom"
import { useGetRecipesQuery } from "../servises/recipeApi"
import { Link } from "react-router-dom"
import '../css/recipes.css'
import SortCategories from "./SortCategories"

const Sorted = () => {

	const { data: recipes } = useGetRecipesQuery(null)
	const categories: string[] = Array.from(new Set(recipes?.flatMap(recipe => recipe.category)))
	const location = useLocation()
	const query = location.state.query

	const sortedRecipes = recipes?.filter(recipe => recipe.category.includes(query))

	return (
		<section>
			<SortCategories categories={categories} />
			<section className="recipeList">
				{sortedRecipes && sortedRecipes.map(recipe => (
					<Link to={`/recipes/${recipe.id}`} key={recipe.id}>
						<RecipeItem recipe={recipe} />
					</Link>
				))}
			</section>
		</section>
	)
}

export default Sorted