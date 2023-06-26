import { Form, Input } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'

type InputPasswordProps = {
	name: string
	placeholder: string
	icon: React.ReactNode
	size?: 'large' | 'middle' | 'small'
}

export const InputPassword = ({
	name,
	icon,
	placeholder,
	size = 'large',
}: InputPasswordProps) => {
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
					<Input.Password
						prefix={icon}
						type={name}
						placeholder={placeholder}
						size={size}
						{...field}
					/>
				</Form.Item>
			)}
		/>
	)
}
