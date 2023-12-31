import { useState, ChangeEvent, FormEvent, useContext } from 'react'
import '../../css/auth.css'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useAddUserMutation } from '../../servises/userApi'
import { CustomContext } from '../../context/Context'
import { IContextValue } from '../../context/Context'
import { ICurrentUser, IUser } from '../../types/types'
import { useNavigate, Link } from 'react-router-dom'

const SignUp = () => {

	const navigate = useNavigate()
	const [addUser] = useAddUserMutation()
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [eye, setEye] = useState<boolean>(false)
	const { setUser } = useContext(CustomContext) as IContextValue

	const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			let newUser: IUser = { userName: name, email: email, password: password }
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
		<section className="auth">
			<h1 className='auth__title'>Регистрация</h1>
			<form onSubmit={handleSignup} className="auth__form">
				<input value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} className='auth__input' placeholder='Ваше имя' />
				<input value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className='auth__input' placeholder='Введите email' />
				<div className="auth__pass">
					<input value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className='auth__input' type={eye ? 'text' : 'password'} placeholder='Введите пароль' />
					<span onClick={() => setEye(!eye)} className='auth__eye'>{eye ? <FaEyeSlash /> : <FaEye />}</span>
				</div>
				<p className='auth__link'><Link to='/login'>У меня есть аккаунт</Link></p>
				<button className='auth__btn' type='submit'>Зарегистрироваться</button>
			</form>
		</section>
	)
}

export default SignUp