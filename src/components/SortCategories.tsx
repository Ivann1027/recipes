import { useNavigate } from "react-router-dom"
import '../styles/subHeader.scss'

interface ICategoriesProps {
	categories: string[]
}

const SortCategories: React.FC<ICategoriesProps> = ({ categories }) => {
	
	const navigate = useNavigate()
	const select = document.getElementById('select')

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		
		navigate('/sorted', { state: { query: e.target.value } })
	}

	return (
		<section>
			<select id='select' defaultValue={'Все'} className="sort" onChange={handleChange}>
				<option value='Все'>Все</option>
				{categories.map(category => (
					<option key={category} value={category}>{category}</option>
				))}
			</select>
		</section>
	)
}

export default SortCategories