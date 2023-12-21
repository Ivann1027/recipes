import '../css/main.css'
import { Outlet } from 'react-router-dom'

const Main = () => {


	return (
		<section className="main">
			<Outlet />
		</section>
	)
}

export default Main