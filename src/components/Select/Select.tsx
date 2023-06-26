import { Form, Select as SelectAntd } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'
import { Countries } from '../../types/Countries'

type SelectProps = {
	name: string
	placeholder: string
	countries: Countries[]
	size?: 'large' | 'middle' | 'small'
}

export const Select = ({
	name,
	placeholder,
	countries,
	size = 'large',
}: SelectProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext()
	return (
		<Controller
			name='country'
			control={control}
			render={({ field }) => (
				<Form.Item
					help={errors[name] && errors[name]?.message?.toString()}
					validateStatus={errors[name] ? 'error' : ''}>
					<SelectAntd
						size={size}
						defaultValue={countries[0]}
						placeholder={placeholder}
						options={countries}
						{...field}
					/>
				</Form.Item>
			)}
		/>
	)
}
