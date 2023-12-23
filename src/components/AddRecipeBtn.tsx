import '../css/subHeader.css'
import { useNavigate } from 'react-router-dom'

const AddRecipeBtn = () => {

	const navigate = useNavigate()

	const addRecipe = () => {
		navigate('/add-recipe')
	}

	return (
		<section className="addRecipeBtn">
			<button onClick={addRecipe}>Добавить рецепт</button>
		</section>
	)
}

export default AddRecipeBtn