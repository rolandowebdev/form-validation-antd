import { Form, InputNumber as InputNumberAntd } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'

type InputNumberProps = {
	name: string
	placeholder: string
	addonBefore: string
	size?: 'large' | 'middle' | 'small'
}

export const InputNumber = ({
	name,
	placeholder,
	addonBefore,
	size = 'large',
}: InputNumberProps) => {
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
					<InputNumberAntd
						style={{ width: '100%' }}
						addonBefore={addonBefore}
						placeholder={placeholder}
						size={size}
						{...field}
					/>
				</Form.Item>
			)}
		/>
	)
}
