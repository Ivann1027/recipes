import { useNavigate } from "react-router-dom"

interface ICategoriesProps {
	categories: string[]
}

const SortCategories: React.FC<ICategoriesProps> = ({ categories }) => {
	
	const navigate = useNavigate()

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		navigate('/sorted', {state: {query: e.target.value}})
	}

	return (
		<aside style={{marginBottom: 40}}>
			<select onChange={handleChange}>
				<option disabled>Все</option>
				{categories.map(category => (
					<option key={category} value={category}>{category}</option>
				))}
			</select>
		</aside>
	)
}

export default SortCategories