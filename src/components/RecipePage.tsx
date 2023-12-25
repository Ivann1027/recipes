import '../css/recipePage.css'
import { useParams } from 'react-router-dom'
import { useGetRecipeQuery } from '../servises/recipeApi'


const RecipePage = () => {

	const { id } = useParams()
	const { data: recipe } = useGetRecipeQuery(String(id))

	return (
		<section className="recipePage">
			<h1 className='recipePage-title'>{recipe && recipe.name}</h1> 
			<section className='recipePage-about'>
				<div className='recipePage-img'></div>
				<p className='recipePage-description'>{recipe?.description}</p>
				<p className='recipePage-time'><strong>Время приготовления:</strong> <br />
					{recipe && recipe.time.hours > 0 && `${recipe.time.hours} ч.`} {recipe && recipe.time.minutes > 0 && `${recipe.time.minutes} мин.`}
				</p>
			</section>
			<section className='ingredients'>
				<h1 className='ingredients-title'>Ингредиенты:</h1>
				<ul>
					{recipe && recipe.ingredients.map(ingredient => (
						<li key={ingredient.name}>{ingredient.name} - {ingredient.amount}</li>
					))}
				</ul>
			</section>
			<div className='cooking'>
				<h1 className='cooking-title'>Приготовление:</h1>
				{recipe && recipe.steps.map(step => (
					<p className='cooking-step' key={step.num}>{step.num}. {step.body}</p>
				))}
			</div>
		</section>
	)
}

export default RecipePage