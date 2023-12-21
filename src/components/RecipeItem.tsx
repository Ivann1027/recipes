import { IRecipe } from "../types/types"
import '../css/recipeItem.css'

interface RecipeItemProps {
	recipe: IRecipe
}

const RecipeItem: React.FC<RecipeItemProps> = ({recipe}) => {

	

	return (
		<article className="recipeItem">
			<div className="recipeItem-img"></div>
			<div className="recipeItem-info">
				<h1 className="recipeItem-title">{recipe.name}</h1>
				<p className="recipeItem-time">{recipe.time.hours} ч. {recipe.time.minutes} мин.</p>
				<p className="recipeItem-description">{recipe.description}</p>
			</div>
		</article>
	)
}

export default RecipeItem