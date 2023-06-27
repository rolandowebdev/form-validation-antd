import { Form, Input, Button, Space } from 'antd'
import { useFieldArray, useFormContext, Controller } from 'react-hook-form'

type DynamicInputProps = {
	name: string
	size?: 'large' | 'middle' | 'small'
}

export const DynamicInput = ({ name, size = 'large' }: DynamicInputProps) => {
	const { control } = useFormContext()
	const { fields, append, remove } = useFieldArray({
		name: name,
		control,
	})

	return (
		<Space direction='vertical' size={0}>
			{fields.map((field, index) => (
				<Space key={field.id}>
					<Form.Item>
						<Space>
							<Controller
								control={control}
								name={`items[${index}].name`}
								render={({ field }) => (
									<Input
										{...field}
										size={size}
										placeholder={`Item ${index + 1}`}
									/>
								)}
							/>
							<Button onClick={() => append({})}>Add Field</Button>
							<Button
								size='middle'
								onClick={() => remove(index)}
								disabled={index < 1 ? true : false}>
								Remove
							</Button>
						</Space>
					</Form.Item>
				</Space>
			))}
		</Space>
	)
}
