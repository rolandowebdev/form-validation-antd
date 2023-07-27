import {
	LockOutlined,
	MailOutlined,
	UserOutlined,
	AlertFilled,
} from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import {
	Button,
	Card,
	Col,
	Form,
	Layout,
	List,
	Row,
	Typography,
	theme,
} from 'antd'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { User } from '../types/User'
import { schema } from '../utils/schemaForm'
import {
	InputText,
	InputNumber,
	Select,
	InputPassword,
	Checkbox,
	DynamicInput,
} from '../components'
import { countries } from '../data'
import { InputCurrency } from '../components/Input/InputCurrency'

export const FormUser = () => {
	const [data, setData] = useState<User | null>(null)
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	const methods = useForm<User>({
		defaultValues: {
			fullName: '',
			email: '',
			number: '',
			currency: 0,
			country: '',
			mobile: '',
			password: '',
			confirmPassword: '',
			items: [{ id: '', name: '' }],
			privacy: false,
		},
		resolver: yupResolver(schema),
	})

	const onSubmit = (data: User) => {
		setData(data)
		methods.reset()
	}

	const dataSource = [
		`Full Name : ${data?.fullName?.toString() ?? ''}` || 'Full Name :',
		`Email : ${data?.email?.toString() ?? ''}` || 'Email :',
		`Number : ${data?.number?.toString() ?? ''}` || 'Number :',
		`Currency : ${data?.currency?.toString() ?? ''}` || 'Currency :',
		`Phone : ${data?.mobile?.toString() ?? ''}` || 'Phone :',
		`Country : ${data?.country?.toString() ?? ''}` || 'Country :',
		`Password : ${data?.password?.toString() ?? ''}` || 'Password :',
		`ConfirmPassword : ${data?.confirmPassword?.toString() ?? ''}` ||
			'Confirm Password :',
		`Items : ${data?.items.map((item) => item.name) ?? ''}` || 'Items :',
		`Privacy : ${data?.privacy?.toString() ?? ''}` || 'Privacy :',
	]

	return (
		<Layout
			style={{
				minHeight: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: colorBgContainer,
			}}>
			<Typography.Title level={1}>Register</Typography.Title>
			<Row gutter={24}>
				<Col>
					<Card bordered style={{ width: '400px' }}>
						<FormProvider {...methods}>
							<Form
								noValidate
								component='form'
								onFinish={methods.handleSubmit(onSubmit)}>
								<InputText
									name='fullName'
									icon={<UserOutlined />}
									placeholder='Full Name'
								/>
								<InputText
									name='email'
									icon={<MailOutlined />}
									placeholder='Email'
								/>

								<InputText
									isCurrencyType
									name='number'
									icon={<AlertFilled />}
									placeholder='Number'
								/>

								<InputCurrency
									name='currency'
									addonBefore='IDR'
									placeholder='Currency'
								/>

								<InputNumber
									name='mobile'
									addonBefore='+62'
									placeholder='Phone Number'
								/>

								<Select
									name='country'
									placeholder='Country'
									countries={countries}
								/>

								<InputPassword
									name='password'
									icon={<LockOutlined />}
									placeholder='Password'
								/>

								<InputPassword
									name='confirmPassword'
									icon={<LockOutlined />}
									placeholder='Confirm Password'
								/>

								<DynamicInput name='items' />

								<Checkbox
									name='privacy'
									text='I agree to Form Validation terms and privacy policy'
								/>

								<Form.Item style={{ textAlign: 'center' }}>
									<Button
										style={{
											width: '100%',
											backgroundColor: '#001529',
											color: '#fff',
										}}
										size='large'
										htmlType='submit'>
										Submit
									</Button>
								</Form.Item>
							</Form>
						</FormProvider>
					</Card>
				</Col>
				<Col>
					<List
						style={{ minWidth: '300px' }}
						header={
							<h1 style={{ textAlign: 'center', fontSize: '20px' }}>
								Form Value
							</h1>
						}
						bordered
						dataSource={dataSource}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Col>
			</Row>
		</Layout>
	)
}
