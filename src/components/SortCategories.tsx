import { useNavigate } from "react-router-dom"
import '../css/subHeader.css'
import { useRef } from "react"

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
		<aside>
			<select id='select' defaultValue={'Все'} className="sort" onChange={handleChange}>
				<option value='Все'>Все</option>
				{categories.map(category => (
					<option key={category} value={category}>{category}</option>
				))}
			</select>
		</aside>
	)
}

export default SortCategories