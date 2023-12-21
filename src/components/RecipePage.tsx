import '../css/recipePage.css'
import { useParams } from 'react-router-dom'
import { useGetRecipeQuery } from '../servises/recipeApi'


const RecipePage = () => {

	const { id } = useParams()
	const { data: recipe } = useGetRecipeQuery(String(id))


	return (
		<section className="recipePage">
			<h1>{recipe && recipe.name}</h1> 
			<p>{recipe?.description}</p>
			<div>
				<h1>Ингредиенты:</h1>
				<ul>
					{recipe && recipe.ingredients.map(ingredient => (
						<ul key={ingredient.name}>{ingredient.name} - {ingredient.amount}.</ul>
					))}
				</ul>
			</div>
			<div>
				<h1>Приготовление:</h1>
				{recipe && recipe.steps.map(step => (
					<p key={step.num}>{step.num}. {step.body}</p>
				))}
			</div>
		</section>
	)
}

export default RecipePage