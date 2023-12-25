import '../css/addingRecipe.css'
import { useState, ChangeEvent, MouseEvent, FormEvent } from 'react'
import { useAddRecipeMutation } from '../servises/recipeApi'
import { useNavigate } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx"

interface IStep {
	num: number
	body: string
}
interface IIngredient {
	name: string
	amount: string
}

const AddingRecipe = () => {

	const [addRecipe, { }] = useAddRecipeMutation()
	const navigate = useNavigate()

	const [name, setName] = useState<string>('')
	const [category, setCategory] = useState<string>('')
	const [categories, setCategories] = useState<string[]>([])
	const [description, setDescription] = useState<string>('')
	const [step, setStep] = useState<string>('')
	const [steps, setSteps] = useState<IStep[]>([])
	const [hours, setHours] = useState<number>(0)
	const [minutes, setMinutes] = useState<number>(0)
	const [ingredient, setIngredient] = useState<string>('')
	const [amount, setAmount] = useState<string>('')
	const [ingredients, setIngredients] = useState<IIngredient[]>([])


	const handleName = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}
	const handleCategory = (e: ChangeEvent<HTMLInputElement>) => {
		setCategory(e.target.value)
	}
	const deleteCategory = (category: string) => {
		setCategories(categories.filter(cat => cat !== category))
	}
	const addCategory = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setCategories([...categories, category])
		setCategory('')
	}
	const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setDescription(e.target.value)
	}
	const handleStep = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setStep(e.target.value)
	}
	const addStep = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setSteps([...steps, { num: steps.length + 1, body: step }])
		setStep('')
	}
	const deleteStep = (e: MouseEvent<HTMLButtonElement>, num: number) => {
		e.preventDefault()
		setSteps(steps.filter(step => step.num !== num))
	}
	const handleHours = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setHours(parseInt(value))
	}
	const handleMinutes = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setMinutes(parseInt(value))
	}
	const addIngredientName = (e: ChangeEvent<HTMLInputElement>) => {
		setIngredient(e.target.value)
	}
	const addIngredientAmount = (e: ChangeEvent<HTMLInputElement>) => {
		setAmount(e.target.value)
	}
	const addIngredient = () => {
		setIngredients([...ingredients, { name: ingredient, amount: amount } as IIngredient])
		setIngredient('')
		setAmount('')
	}
	const deleteIngredient = (e: MouseEvent<HTMLButtonElement>, name: string) => {
		e.preventDefault()
		setIngredients(ingredients.filter(ingredient => ingredient.name !== name))
	} 

	const submitRecipe = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await addRecipe({ id: Date.now(), name: name, category: categories, description: description, ingredients: ingredients, steps: steps, time: {hours: hours, minutes: minutes}})
		setName('')
		setCategories([])
		setDescription('')
		setIngredients([])
		setSteps([])
		setHours(0)
		setMinutes(0)
		navigate(`/recipes`)
	}

	return (
		<section className='addingRecipe'>
			<form onSubmit={submitRecipe} className='addingRecipe-form'>
				<section className='addingRecipe-section'>
					<label htmlFor='name'>Название рецета: </label>
					<input onChange={handleName} value={name} id='name' placeholder='Как нызывается ваш рецепт?' />
				</section>
				<section className="addingRecipe-section">
					<div className='categoriesContainer'>
						{categories && categories.map(category => (
							<p onClick={() => deleteCategory(category)} className='addingRecipe-category' key={category}>{category}</p>
						))}
					</div>
					<label htmlFor='categories'>Категории рецепта: </label>
					<input value={category} onChange={handleCategory} id='categories' placeholder='Категория' />
					<button onClick={addCategory} type='button'>Добавить категорию</button>
				</section>
				<section className="addingRecipe-section">
					<label htmlFor='description'>Описание рецепта: </label>
					<textarea onChange={handleDescription} value={description} id='description' placeholder='Скажите пару слов о рецепте'></textarea>
				</section>
				<section className="addingRecipe-section">
					<label htmlFor="ingredient">Перечислите ингредиенты и их количество:</label>
					<input onChange={addIngredientName} value={ingredient} className='addIngredientName' id='ingredient' placeholder='Ингредиент' />
					<input onChange={addIngredientAmount} value={amount} className='addIngredientAmount' placeholder='Количество' />
					<button onClick={addIngredient} type='button'>Добавить ингредиент</button>
					<div className='ingredientContainer'>
						<h1 style={{display: ingredients.length > 0 ? 'block' : 'none'}} className='ingredient-title'>Ваши ингредиенты:</h1>
						<ul>
							{ingredients && ingredients.map(ingredient => (
								<li key={ingredient.name} className='ingredient'>{ingredient.name} - {ingredient.amount}
									<button onClick={(e) => deleteIngredient(e, ingredient.name)} type='button'><RxCross2 /></button>
								</li>
							))}
						</ul>
					</div>
				</section>
				<section className="addingRecipe-section">
					<label htmlFor='step'>Добавьте пошаговый рецепт:</label>
					<textarea onChange={handleStep} value={step} id='step' placeholder='Действие'></textarea>
					<button onClick={addStep} type='button'>Добавить шаг</button>
					<div className='stepContainer'>
						<h1 style={{display: steps.length > 0 ? 'block' : 'none'}} className='step-title'>Приготовление:</h1>
						{steps && steps.map(step => (
							<p className='step' key={step.num}>{step.num}. {step.body}
							<button onClick={(e) => deleteStep(e, step.num)} type='button'><RxCross2 /></button>
							</p>
						))}
					</div>
				</section>
				<section className="addingRecipe-section">
					<p style={{color: 'darkred', fontSize: 18, marginBottom: 20}}>Сколько приготовление займёт по времени?</p>
					<label htmlFor='hours' style={{color: 'black'}}>
						<input className='houts-input' onChange={handleHours} value={hours} id='hours' type='number' /> часов
					</label>
					<label htmlFor='minutes' style={{color: 'black'}}>
						<input className='minute-input' onChange={handleMinutes} value={minutes} id='minutes' type='number' /> минут
					</label>
				</section>
				<button type='submit'>Сохранить рецепт</button>
			</form>
		</section>
	)
}

export default AddingRecipe