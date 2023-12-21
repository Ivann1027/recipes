import '../css/recipePage.css'
import { useParams } from 'react-router-dom'
import { useGetRecipeQuery } from '../servises/recipeApi'
import { useEffect } from 'react'


const RecipePage = () => {

	const { id } = useParams()
	const { data: recipe } = useGetRecipeQuery(String(id))

	return (
		<section className="recipePage">
			{recipe && recipe.name} 
			<br />
			{recipe?.description}
		</section>
	)
}

export default RecipePage