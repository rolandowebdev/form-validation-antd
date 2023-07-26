import { Form, Input } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'

type InputTextProps = {
	name: string
	placeholder: string
	icon: React.ReactNode
	size?: 'large' | 'middle' | 'small'
	isCurrencyType?: boolean
}

const addCommas = (num: { toString: () => string }) =>
	num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
const removeNonNumeric = (num: { toString: () => string }) =>
	num.toString().replace(/[^0-9]/g, '')

export const InputText = ({
	name,
	placeholder,
	icon,
	size = 'large',
	isCurrencyType,
}: InputTextProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext()

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				const formattedValue = addCommas(removeNonNumeric(field.value))
				return (
					<Form.Item
						help={errors[name] ? errors[name]?.message?.toString() : null}
						validateStatus={errors[name] ? 'error' : ''}>
						<Input
							prefix={icon}
							placeholder={placeholder}
							size={size}
							{...field}
							value={isCurrencyType ? formattedValue : field.value}
						/>
					</Form.Item>
				)
			}}
		/>
	)
}
