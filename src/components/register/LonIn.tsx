import { Link } from "react-router-dom"


const LogIn = () => {


	return (
		<section className="login">
			Hello, I'm LogIn component!
			<form className="login__form">

			</form>
			<Link to='/signup'><span>Зарегистрироваться</span></Link>
		</section>
	)
}

export default LogIn