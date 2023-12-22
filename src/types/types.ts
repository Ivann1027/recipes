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