import '../styles/recipePage.scss'
import { useParams } from 'react-router-dom'
import { useGetRecipeQuery } from '../servises/recipeApi'


const RecipePage = () => {

	const { id } = useParams()
	const { data: recipe } = useGetRecipeQuery(String(id))

	return (
		<section className="recipePage">
			<h1 className='recipePage__title'>{recipe && recipe.name}</h1> 
			<section className='about'>
				<div className='about__img'></div>
				<p className='about__description'>{recipe?.description}</p>
				<p className='about__time'><strong>Время приготовления:</strong> <br />
					{recipe && recipe.time.hours > 0 && `${recipe.time.hours} ч.`} {recipe && recipe.time.minutes > 0 && `${recipe.time.minutes} мин.`}
				</p>
			</section>
			<section className='ingredients'>
				<h1 className='ingredients__title'>Ингредиенты:</h1>
				<ul>
					{recipe && recipe.ingredients.map(ingredient => (
						<li key={ingredient.name}>{ingredient.name} - {ingredient.amount}</li>
					))}
				</ul>
			</section>
			<div className='cooking'>
				<h1 className='cooking__title'>Приготовление:</h1>
				{recipe && recipe.steps.map(step => (
					<p className='cooking__step' key={step.num}>{step.num}. {step.body}</p>
				))}
			</div>
		</section>
	)
}

export default RecipePage