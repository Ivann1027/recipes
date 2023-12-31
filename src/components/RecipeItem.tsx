import { IRecipe } from "../types/types"
import '../css/recipes.css'

interface RecipeItemProps {
	recipe: IRecipe
}

const RecipeItem: React.FC<RecipeItemProps> = ({recipe}) => {

	

	return (
		<article className="recipeItem">
			<div className="recipeItem__img"></div>
			<div className="recipeItem__info">
				<h1 className="recipeItem__title">{recipe.name}</h1>
				<p className="recipeItem__time">{recipe.time.hours > 0 && `${recipe.time.hours} ч.`} {recipe.time.minutes > 0 && `${recipe.time.minutes} мин.`}</p>
				<p className="recipeItem__description">{recipe.description}</p>
			</div>
		</article>
	)
}

export default RecipeItem