import '../css/addingRecipe.css'
import { useState, ChangeEvent, MouseEvent, FormEvent } from 'react'
import { useAddRecipeMutation } from '../servises/recipeApi'

interface IStep {
	id: number
	body: string
}

const AddingRecipe = () => {

	const [addRecipe, {}] = useAddRecipeMutation()

	const [name, setName] = useState<string>('')
	const [category, setCategory] = useState<string>('')
	const [categories, setCategories] = useState<string[]>([])
	const [description, setDescription] = useState<string>('')
	const [step, setStep] = useState<string>('')
	const [steps, setSteps] = useState<IStep[]>([])
	const [hours, setHours] = useState<number>(0)
	const [minutes, setMinutes] = useState<number>(0)


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
		setSteps([...steps, { id: steps.length + 1, body: step }])
		setStep('')
	}
	const handleHours = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setHours(parseInt(value))
	}
	const handleMinutes = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setMinutes(parseInt(value))
	}

	const submitRecipe = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// await addRecipe({ name: name, category: categories, description: description, steps: steps, time: {hours: hours, minutes: minutes}})
	}

	return (
		<section className='addingRecipe'>
			<form onSubmit={submitRecipe} className='addingRecipe-form'>
				<label htmlFor='name'>Название рецета: </label>
				<input onChange={handleName} value={name} className='addingRecipe-name' id='name' placeholder='Как нызывается ваш рецепт?' />
				<div className='categoriesContainer'>
					{categories && categories.map(category => (
						<p onClick={() => deleteCategory(category)} className='addingRecipe-category' key={category}>{category}</p>
					))}
				</div>
				<label htmlFor='categories'>Категории рецепта: </label>
				<input value={category} onChange={handleCategory} className='addCategoryInput' id='categories' placeholder='Категория' />
				<button onClick={addCategory} className='addCategoryBtn' type='button'>Добавить категорию</button>
				<label htmlFor='description'>Описание рецепта: </label>
				<textarea onChange={handleDescription} value={description} className='addingRecipe-description' id='description' placeholder='Скажите пару слов о рецепте'></textarea>
				<label htmlFor='step'>Добавьте пошаговый рецепт:</label>
				<textarea onChange={handleStep} value={step} className='addStepText' id='step' placeholder='Действие'></textarea>
				<button onClick={addStep} className='addStepBtn' type='button'>Добавить шаг</button>
				<div className='stepsContainer'>
					{steps && steps.map(step => (
						<p className='addingRecipe-step' key={step.id}>{step.id}. {step.body}</p>
					))}
				</div>
				<p>Сколько приготовление займёт по времени?</p>
				<label htmlFor='hours'>
					<input onChange={handleHours} value={hours} type='number' /> часов
				</label>
				<label>
					<input onChange={handleMinutes} value={minutes} type='number' /> минут
				</label>
				<button type='submit'>Сохранить рецепт</button>
			</form>
		</section>
	)
}

export default AddingRecipe