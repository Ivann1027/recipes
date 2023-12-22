import { useGetRecipesQuery } from "../servises/recipeApi"
import { IRecipe } from "../types/types"
import RecipeItem from "./RecipeItem"
import '../css/recipes.css'
import { Link } from "react-router-dom"
import SortCategories from "./SortCategories"

const RecipeList = () => {

	const { data: recipes } = useGetRecipesQuery(null)
	const categories: string[] = Array.from(new Set(recipes?.flatMap(recipe => recipe.category)))

	return (
		<section>
			<SortCategories categories={categories} />
			<section className="recipeList">
				{recipes && recipes.map((recipe: IRecipe) => (
					<Link to={`/recipes/${recipe.id}`} key={recipe.id}>
						<RecipeItem recipe={recipe} />
					</Link>	
				))}
			</section>
		</section>
	)
}

export default RecipeList