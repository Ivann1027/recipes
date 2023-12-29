import { createContext, useState, useEffect, Dispatch, SetStateAction } from "react"
import { ICurrentUser } from "../types/types"

export const CustomContext = createContext<IContextValue | null>(null)

interface IContextProps {
	children: React.ReactNode
}

export interface IContextValue {
	user: ICurrentUser
	setUser: Dispatch<SetStateAction<ICurrentUser>>
}

export const Context: React.FC<IContextProps> = ({children}) => {

	const [user, setUser] = useState<ICurrentUser>({accessToken: '', user: {userName: '', email: '', id: 0}})

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('currentUser') as string))	
	}, [])

	const value: IContextValue = {
		user,
		setUser
	}

	return (
		<CustomContext.Provider value={value}>
			{children}
		</CustomContext.Provider>
	)
}