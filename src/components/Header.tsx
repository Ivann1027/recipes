import { ChangeEvent, FormEvent, useState, useRef } from 'react'
import '../css/header.css'
import { useNavigate } from 'react-router-dom'


const Header = () => {

	const navigate = useNavigate()
	const inputRef = useRef(null)
	const [value, setValue] = useState<string>('')
	const searchInput = document.getElementById('searchInput')

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const submitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (value.length > 0) {
			navigate('/search', { state: { query: value } })
		}
		setValue('')
		searchInput?.blur()
	}

	return (
		<header className="header">
			<h1 onClick={() => navigate('/recipes')} className='header-title'>Recipes</h1>
			<div onClick={() => navigate('/recipes')} className='header-logo'></div>
			<div className='header-search'>
				<form onSubmit={submitForm}>
					<input id='searchInput' ref={inputRef} onChange={handleChange} value={value} placeholder='Найдите рецепт' type='text' />
					<button type='submit'>Найти</button>
				</form>
			</div>
		</header>
	)
}

export default Header