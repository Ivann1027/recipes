import '../css/main.css'
import { Outlet } from 'react-router-dom'
import SubHeader from './SubHeader'

const Main = () => {


	return (
		<section className="main wrapper">
			<SubHeader />
			<Outlet />
		</section>
	)
}

export default Main