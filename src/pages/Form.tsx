import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import {
	Button,
	Card,
	Checkbox,
	Form,
	Input,
	InputNumber,
	Layout,
	Select,
	Typography,
	theme,
} from 'antd'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { User } from '../types/User'
import { schema } from '../utils/schemaForm'

export const FormUser = () => {
	const [data, setData] = useState<User | null>(null)
	const {
		token: { colorBgContainer },
	} = theme.useToken()

	const {
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm<User>({
		defaultValues: {
			fullName: '',
			email: '',
			country: '',
			mobile: '',
			password: '',
			confirmPassword: '',
			privacy: false,
		},
		resolver: yupResolver(schema),
	})

	const onSubmit = (data: User) => {
		setData(data)
		reset()
	}

	return (
		<Layout
			style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: colorBgContainer,
			}}>
			<Typography.Title level={1}>Register</Typography.Title>
			<Card bordered style={{ width: '400px' }}>
				<Form noValidate component='form' onFinish={handleSubmit(onSubmit)}>
					<Controller
						name='fullName'
						control={control}
						render={({ field }) => (
							<Form.Item
								help={errors['fullName'] ? errors['fullName']?.message : null}
								validateStatus={errors['fullName'] ? 'error' : ''}>
								<Input
									prefix={<UserOutlined />}
									placeholder='Full Name'
									size='large'
									{...field}
								/>
							</Form.Item>
						)}
					/>

					<Controller
						name='email'
						control={control}
						render={({ field }) => (
							<Form.Item
								help={errors['email'] ? errors['email']?.message : null}
								validateStatus={errors['email'] ? 'error' : ''}>
								<Input
									prefix={<MailOutlined />}
									placeholder='Email'
									size='large'
									{...field}
								/>
							</Form.Item>
						)}
					/>

					<Controller
						name='country'
						control={control}
						render={({ field }) => (
							<Form.Item
								help={errors['country'] ? errors['country']?.message : null}
								validateStatus={errors['country'] ? 'error' : ''}>
								<Select
									size='large'
									defaultValue='indonesia'
									placeholder='Country'
									options={[
										{ value: 'jepang', label: 'Jepang' },
										{ value: 'indonesia', label: 'Indonesia' },
										{ value: 'prancis', label: 'Prancis' },
										{ value: 'swiss', label: 'Swiss' },
									]}
									{...field}
								/>
							</Form.Item>
						)}
					/>

					<Controller
						name='mobile'
						control={control}
						render={({ field }) => (
							<Form.Item
								help={errors['mobile'] ? errors['mobile']?.message : null}
								validateStatus={errors['mobile'] ? 'error' : ''}>
								<InputNumber
									style={{ width: '100%' }}
									addonBefore='+62'
									placeholder='Phone Number'
									size='large'
									{...field}
								/>
							</Form.Item>
						)}
					/>
					<Controller
						name='password'
						control={control}
						render={({ field }) => (
							<Form.Item
								help={errors['password'] ? errors['password']?.message : null}
								validateStatus={errors['password'] ? 'error' : ''}>
								<Input.Password
									prefix={<LockOutlined />}
									type='password'
									placeholder='Password'
									size='large'
									{...field}
								/>
							</Form.Item>
						)}
					/>
					<Controller
						name='confirmPassword'
						control={control}
						render={({ field }) => (
							<Form.Item
								help={
									errors['confirmPassword']
										? errors['confirmPassword']?.message
										: null
								}
								validateStatus={errors['confirmPassword'] ? 'error' : ''}>
								<Input.Password
									prefix={<LockOutlined />}
									type='password'
									placeholder='Confirm Password'
									size='large'
									{...field}
								/>
							</Form.Item>
						)}
					/>

					<Controller
						name='privacy'
						control={control}
						render={({ field }) => (
							<Form.Item
								help={errors['privacy'] ? errors['privacy']?.message : null}
								validateStatus={errors['privacy'] ? 'error' : ''}>
								<Checkbox {...field}>
									I agree to Form Validation terms and privacy policy
								</Checkbox>
							</Form.Item>
						)}
					/>

					<Form.Item style={{ textAlign: 'center', marginTop: '24px' }}>
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
			</Card>
			<Typography.Text style={{ marginBottom: '24px' }}>
				{data ? JSON.stringify(data) : ''}
			</Typography.Text>
		</Layout>
	)
}
