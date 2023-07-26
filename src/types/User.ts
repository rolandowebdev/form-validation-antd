export type Items = {
	items: { id: string; name: string }[]
}

export type User = {
	fullName: string
	email: string
	number: string
	country: string
	mobile: string
	password: string
	confirmPassword: string
	items: { id: string; name: string }[]
	privacy: boolean
}
