import { useNavigate } from "react-router-dom"
import '../css/subHeader.css'

interface ICategoriesProps {
	categories: string[]
}

const SortCategories: React.FC<ICategoriesProps> = ({ categories }) => {
	
	const navigate = useNavigate()

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		navigate('/sorted', {state: {query: e.target.value}})
	}

	return (
		<aside>
			<select defaultValue={'Все'} className="sort" onChange={handleChange}>
				<option disabled value='Все'>Все</option>
				{categories.map(category => (
					<option key={category} value={category}>{category}</option>
				))}
			</select>
		</aside>
	)
}

export default SortCategories