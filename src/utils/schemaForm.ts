import * as yup from 'yup'
import { validation } from '../utils/validationForm'

export const schema = yup.object().shape({
	fullName: yup.string().required('Full Name is required!'),
	email: yup
		.string()
		.required('Email is required!')
		.email()
		.matches(
			validation.email,
			'Invalid email address. Please enter a valid email.'
		),
	country: yup.string().required('Country is required!'),
	mobile: yup
		.string()
		.required('Mobile Phone is required!')
		.matches(validation.phone, 'Phone number is not valid!'),
	password: yup
		.string()
		.required('Password is required!')
		.matches(
			validation.password,
			'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character.'
		),
	confirmPassword: yup
		.string()
		.required('Confirm Password is required!')
		.oneOf([yup.ref('password'), ''], 'Confirm Password does not match!'),
	privacy: yup.bool().oneOf([true], 'Accept Terms is required'),
})
