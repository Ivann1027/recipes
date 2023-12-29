import { useState, ChangeEvent, FormEvent, useContext } from 'react'
import '../../css/signup.css'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useAddUserMutation } from '../../servises/userApi'
import { CustomContext } from '../../context/Context'
import { IContextValue } from '../../context/Context'
import { ICurrentUser, IUser } from '../../types/types'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

	const navigate = useNavigate()
	const [addUser, { }] = useAddUserMutation()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [eye, setEye] = useState(false)
	const contextValue: IContextValue | null = useContext(CustomContext)
	const { user, setUser } = contextValue as IContextValue

	const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			let newUser = { userName: name, email: email, password: password }
			const result = await addUser(newUser)
			if ('data' in result) {
				const data: ICurrentUser = result.data
				setUser(data)
				localStorage.setItem('currentUser', JSON.stringify(data))
			}
			navigate('/')
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<section className="signup">
			<h1 className='signup__title'>Регистрация</h1>
			<form onSubmit={handleSignup} className="signup__form">
				<input value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} className='signup__input' placeholder='Ваше имя' />
				<input value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className='signup__input' placeholder='Введите email' />
				<div className="signup__pass">
					<input value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className='signup__input' type={eye ? 'text' : 'password'} placeholder='Введите пароль' />
					<span onClick={() => setEye(!eye)} className='signup__eye'>{eye ? <FaEyeSlash /> : <FaEye />}</span>
				</div>
				<button className='signup__btn' type='submit'>Зарегистрироваться</button>
			</form>
		</section>
	)
}

export default SignUp