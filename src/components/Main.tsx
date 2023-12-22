import '../css/main.css'
import { Outlet } from 'react-router-dom'

const Main = () => {


	return (
		<section className="main wrapper">
			<Outlet />
		</section>
	)
}

export default Main