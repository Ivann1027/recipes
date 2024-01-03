import { ChangeEvent, FormEvent, useState, useRef, useContext } from 'react'
import '../styles/header.scss'
import { useNavigate } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa"
import { CustomContext, IContextValue } from '../context/Context'
import { ICurrentUser } from '../types/types'
import Authorized from './user/Authorized'

const Header = () => {

	const navigate = useNavigate()
	const inputRef = useRef(null)
	const [value, setValue] = useState<string>('')
	const searchInput = document.getElementById('searchInput')
	const contextValue: IContextValue | null = useContext(CustomContext)
	const { user, setUser, emptyUser } = contextValue as IContextValue

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
			<h1 onClick={() => navigate('/recipes')} className='header__title'>Recipes</h1>
			<div onClick={() => navigate('/recipes')} className='header__logo'></div>
			<div className='header__search'>
				<form onSubmit={submitForm}>
					<input id='searchInput' ref={inputRef} onChange={handleChange} value={value} placeholder='Найдите рецепт' type='text' />
					<button type='submit'>Найти</button>
				</form>
			</div>
				{user.user.userName.length ?
						<Authorized />
					:
					<div className='header__login'>
						<span onClick={() => navigate('/login')} className='header__login-btn'>Вход</span>
						<FaRegUser />
					</div>	
				}
		</header>
	)
}

export default Header