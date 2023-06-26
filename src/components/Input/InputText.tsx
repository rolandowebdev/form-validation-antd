import { Form, Input } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'

type InputTextProps = {
	name: string
	placeholder: string
	icon: React.ReactNode
	size?: 'large' | 'middle' | 'small'
}

export const InputText = ({
	name,
	placeholder,
	icon,
	size = 'large',
}: InputTextProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext()
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<Form.Item
					help={errors[name] ? errors[name]?.message?.toString() : null}
					validateStatus={errors[name] ? 'error' : ''}>
					<Input
						prefix={icon}
						placeholder={placeholder}
						size={size}
						{...field}
					/>
				</Form.Item>
			)}
		/>
	)
}
