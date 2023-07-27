import { Form, InputNumber as InputNumberAntd } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'

type InputCurrencyProps = {
	name: string
	placeholder: string
	addonBefore: string
	size?: 'large' | 'middle' | 'small'
}

declare global {
	interface BigInt {
		toJSON: () => string
	}
}

BigInt.prototype.toJSON = function () {
	return this.toString()
}

export const InputCurrency = ({
	name,
	placeholder,
	addonBefore,
	size = 'large',
}: InputCurrencyProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext()

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				return (
					<Form.Item
						help={errors[name] ? errors[name]?.message?.toString() : null}
						validateStatus={errors[name] ? 'error' : ''}>
						<InputNumberAntd
							style={{ width: '100%' }}
							addonBefore={addonBefore}
							formatter={(value) =>
								`${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
							}
							placeholder={placeholder}
							size={size}
							{...field}
						/>
					</Form.Item>
				)
			}}
		/>
	)
}
