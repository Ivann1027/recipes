import { Link, useNavigate } from "react-router-dom"
import '../../css/auth.css'
import { ChangeEvent, FormEvent, useState, useContext } from "react"
import { ICurrentUser, ILoginUser } from "../../types/types"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useLoginMutation } from "../../servises/userApi"
import { CustomContext, IContextValue } from "../../context/Context"

const LogIn = () => {

	const [login] = useLoginMutation()
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [eye, setEye] = useState<boolean>(false)
	const { setUser, emptyUser } = useContext(CustomContext) as IContextValue
	const navigate = useNavigate()

	const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault()
			let loginUser: ILoginUser = { email: email, password: password }
			const result = await login(loginUser)
			if ('data' in result) {
				const data: ICurrentUser = result.data
				setUser(data)
				localStorage.setItem('currentUser', JSON.stringify(data))
				navigate('/')
			} else {
				console.log('Данные с сервера не пришли')
			}
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<section className="auth">
			<h1 className="auth__title">Hello, I'm LogIn component!</h1>
			<form onSubmit={handleLogin} className="auth__form">
				<input value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="auth__input" placeholder="Введите email" />
				<div className="auth__pass">
					<input value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className='auth__input' type={eye ? 'text' : 'password'} placeholder='Введите пароль' />
					<span onClick={() => setEye(!eye)} className='auth__eye'>{eye ? <FaEyeSlash /> : <FaEye />}</span>
				</div>
				<p className="auth__link"><Link to='/signup'>Зарегистрироваться</Link></p>
				<button className="auth__btn" type='submit'>Войти</button>
			</form>
			
		</section>
	)
}

export default LogIn