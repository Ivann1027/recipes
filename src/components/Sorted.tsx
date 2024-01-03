import RecipeItem from "./RecipeItem"
import { useLocation } from "react-router-dom"
import { useGetRecipesQuery } from "../servises/recipeApi"
import { Link } from "react-router-dom"
import '../styles/recipes.scss'

const Sorted = () => {

	const { data: recipes } = useGetRecipesQuery(null)
	const location = useLocation()
	const query = location.state.query

	const sortedRecipes = recipes?.filter(recipe => recipe.category.includes(query))

	return (
		<section className="recipeList">
			{sortedRecipes && sortedRecipes.map(recipe => (
				<Link to={`/recipes/${recipe.id}`} key={recipe.id}>
					<RecipeItem recipe={recipe} />
				</Link>
			))}
		</section>
	)
}

export default Sorted