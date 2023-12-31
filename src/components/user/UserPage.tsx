import { CustomContext } from "../../context/Context"
import { useContext } from "react"
import { IContextValue } from "../../context/Context"

const UserPage = () => {

	const { user } = useContext(CustomContext) as IContextValue

	return (
		<section className="user">
			<h1>{user.user.userName}</h1>
			<div>{user.user.email}</div>
		</section>
	)
}

export default UserPage