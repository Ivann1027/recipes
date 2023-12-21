import '../css/main.css'
import RecipeList from './RecipeList'
import { Outlet } from 'react-router-dom'

interface MainProps {
	children: React.ReactNode
}

const Main: React.FC = () => {


	return (
		<section className="main">
			<Outlet />
		</section>
	)
}

export default Main