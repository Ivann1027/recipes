import { useGetRecipesQuery } from "../servises/recipeApi"
import { IRecipe } from "../types/types"
import RecipeItem from "./RecipeItem"
import '../css/recipes.css'
import { Link } from "react-router-dom"

const RecipeList = () => {

	const { data: recipes } = useGetRecipesQuery(null)

	return (
		<section className="recipeList">
			{recipes && recipes.map((recipe: IRecipe) => (
				<Link to={`/recipes/${recipe.id}`} key={recipe.id}>
					<RecipeItem recipe={recipe} />
				</Link>	
			))}
		</section>
	)
}

export default RecipeList