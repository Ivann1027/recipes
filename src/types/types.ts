interface IIngredient {
	name: string
	amount: string
}
interface IStep {
	num: number
	body: string
}

export interface IRecipe {
	id: number
	name: string
	category: string[]
	description: string
	ingredients: IIngredient[]
	steps: IStep[]
	time: {
		hours: number
		minutes: number
	}
}

export interface IUser {
	userName: string
	email: string
	password: string
}

export interface ICurrentUser {
	accessToken: string
	user: {
		id: number
		userName: string
		email: string
	}
}

export interface ILoginUser {
	email: string
	password: string
}