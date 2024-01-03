import SortCategories from "./SortCategories"
import { useGetRecipesQuery } from "../servises/recipeApi"
import '../styles/subHeader.scss'
import AddRecipeBtn from "./AddRecipeBtn"

const SubHeader = () => {
	
	const { data: recipes } = useGetRecipesQuery(null)
	const categories: string[] = Array.from(new Set(recipes?.flatMap(recipe => recipe.category)))

	return (
		<section className="subHeader">
			<SortCategories categories={categories} />
			<AddRecipeBtn />
		</section>
	)
}

export default SubHeader