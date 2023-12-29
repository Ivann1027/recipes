import { ChangeEvent, FormEvent, useState, useRef, useContext } from 'react'
import '../css/header.css'
import { useNavigate } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa"
import { CustomContext, IContextValue } from '../context/Context'
import { ICurrentUser } from '../types/types'

const Header = () => {

	const navigate = useNavigate()
	const inputRef = useRef(null)
	const [value, setValue] = useState<string>('')
	const searchInput = document.getElementById('searchInput')
	const contextValue: IContextValue | null = useContext(CustomContext)
	const { user, setUser } = contextValue as IContextValue

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

	const logout = () => {
		localStorage.removeItem('currentUser')
		setUser({accessToken: '', user: {userName: '', email: '', id: 0}})
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
			<div className='header__login'>
				{user.user.userName.length ? <span onClick={logout} className='header__login-btn'>Выйти</span>
					: <span onClick={() => navigate('/login')} className='header__login-btn'>Вход</span>
				}
				<FaRegUser />
			</div>
		</header>
	)
}

export default Header