import { Form, Checkbox as CheckboxAntd } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'

type CheckboxProps = {
	name: string
	text: string
}

export const Checkbox = ({ name, text }: CheckboxProps) => {
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
					<CheckboxAntd {...field} checked={false}>
						{text}
					</CheckboxAntd>
				</Form.Item>
			)}
		/>
	)
}
