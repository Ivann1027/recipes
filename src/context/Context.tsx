import { createContext, useState, useEffect, Dispatch, SetStateAction } from "react"
import { ICurrentUser } from "../types/types"

export const CustomContext = createContext<IContextValue | null>(null)

interface IContextProps {
	children: React.ReactNode
}

export interface IContextValue {
	user: ICurrentUser
	setUser: Dispatch<SetStateAction<ICurrentUser>>
	emptyUser: ICurrentUser
}

export const Context: React.FC<IContextProps> = ({ children }) => {
	
	const emptyUser: ICurrentUser = {accessToken: '', user: {userName: '', email: '', id: 0}}
	const [user, setUser] = useState<ICurrentUser>(emptyUser)

	useEffect(() => {
		if (localStorage.getItem('currentUser') === null) {
			localStorage.setItem('currentUser', JSON.stringify(emptyUser))
		} else {
			setUser(JSON.parse(localStorage.getItem('currentUser') as string))
		}
	}, [])

	const value: IContextValue = {
		user,
		setUser,
		emptyUser
	}

	return (
		<CustomContext.Provider value={value}>
			{children}
		</CustomContext.Provider>
	)
}