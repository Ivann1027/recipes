import { FormEvent, useRef } from 'react'
import '../css/header.css'
import { useNavigate } from 'react-router-dom'


const Header = () => {

	const navigate = useNavigate()
	const inputRef = useRef<HTMLInputElement>(null)

	const submitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (inputRef.current?.value) {
			inputRef.current.value = ''
		}
	}

	return (
		<header className="header">
			<h1 className='header-title'>Recipes</h1>
			<div onClick={() => navigate('/')} className='header-logo'></div>
			<div className='header-search'>
				<form onSubmit={submitForm}>
					<input ref={inputRef} placeholder='Найдите рецепт' type='text' />
					<button type='submit'>Найти</button>
				</form>
			</div>
		</header>
	)
}

export default Header