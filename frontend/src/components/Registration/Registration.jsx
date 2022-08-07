import { useState } from 'react';
import { Formik } from 'formik';
import { registration } from '../../core/store/RegistrationSlice';
import { useDispatch } from 'react-redux';
import { clearLoadingStatus } from '../../core/store/RegistrationSlice';
import { useNavigate } from 'react-router-dom';
import { BASE } from '../../core/config/RoutesConfig';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BirthDateMask from '../../shared/BirthDateMask';
import MenuItem from '@mui/material/MenuItem';

const Registration = () => {
	const dispatch = useDispatch();
	const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
	const regDate = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
	const navigate = useNavigate();
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const transformBirthDate = (date) => {
		const arrOfDates = date.match(/\d+/g);

		return arrOfDates[2] + '-' + arrOfDates[1] + '-' + arrOfDates[0];
	};

	const educationTypes = ['Среднее общее', 'Неоконченное высшее', 'Высшее'];

	return (
		<>
			<Typography
				variant='h5'
				sx={{ textAlign: 'center', mt: 2 }}
				component='h2'>
				Создайте ваш аккаунт
			</Typography>

			<Formik
				initialValues={{
					name: '',
					surname: '',
					email: '',
					birthDate: '',
					location: '',
					number: '',
					education: 'Среднее общее',
					password: '',
					secondPassword: '',
				}}
				validate={(values) => {
					const errors = {};

					if (!values.name || values.name.length < 5) {
						errors.name = 'Пожалуйста введите имя';
					}

					if (!values.surname || values.surname.length < 5) {
						errors.surname = 'Пожалуйста введите фамилию';
					}

					if (!regDate.test(values.birthDate)) {
						errors.birthDate =
							'Пожалуйста введите корректную дату рождения';
					}

					if (!values.location || values.location.length < 3) {
						errors.location = 'Пожалуйста введите ваш город';
					}

					if (!values.education) {
						errors.education =
							'Пожалуйста введите ваше образование';
					}

					if (!regEmail.test(values.email)) {
						errors.email = 'Неверно введен email адрес';
					}

					if (values.password !== values.secondPassword) {
						errors.password = 'Пароли не совпадают';
					}

					if (values.secondPassword.length < 6) {
						errors.password =
							'Пароли должен содержать минимум 6 символов';
					}

					return errors;
				}}
				onSubmit={(values) => {
					dispatch(clearLoadingStatus(false));
					setSuccess('');
					setError('');

					const data = {
						name: values.name,
						surname: values.surname,
						email: values.email,
						birthDate: transformBirthDate(values.birthDate),
						location: values.location,
						number: values.number,
						education: values.education,
						password: values.password,
					};

					dispatch(registration(data))
						.unwrap()
						.then((res) => {
							if (res.message) {
								setError(res.message);
							} else {
								setSuccess('Пользователь успешно создан');
								setTimeout(() => {
									navigate(BASE);
								}, 2000);
							}
						});
				}}>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<Box
						width={600}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							margin: '0 auto',
						}}
						component='form'
						onSubmit={handleSubmit}>
						<TextField
							type='text'
							name='name'
							value={values.name}
							onChange={handleChange}
							label='Имя'
							placeholder={'Введите ваше имя'}
							onBlur={handleBlur}
							fullWidth
							margin='normal'
							helperText={errors.name}
							error={errors.name && touched.name}
						/>

						<TextField
							type='text'
							name='surname'
							value={values.surname}
							onChange={handleChange}
							onBlur={handleBlur}
							label='Фамилия'
							placeholder={'Введите вашу фамилию'}
							fullWidth
							margin='normal'
							helperText={errors.surname}
							error={errors.surname && touched.surname}
						/>

						<TextField
							type='email'
							name='email'
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							label={'Почта'}
							placeholder={'Введите вашу почту'}
							autoComplete='username'
							fullWidth
							margin='normal'
							helperText={errors.email}
							error={errors.email && touched.email}
						/>

						<TextField
							type='text'
							name='birthDate'
							value={values.birthDate}
							onChange={handleChange}
							onBlur={handleBlur}
							label={'Дата рождения'}
							placeholder={'Введите вашу дату рождения'}
							fullWidth
							margin='normal'
							InputProps={{
								inputComponent: BirthDateMask,
							}}
							helperText={errors.birthDate}
							error={errors.birthDate && touched.birthDate}
						/>

						<TextField
							type='text'
							name='location'
							value={values.location}
							onChange={handleChange}
							onBlur={handleBlur}
							label={'Город'}
							placeholder={'Введите ваш город'}
							fullWidth
							margin='normal'
							helperText={errors.location}
							error={errors.location && touched.location}
						/>

						<TextField
							type='text'
							name='number'
							value={values.number}
							onChange={handleChange}
							label={'Номер телефона'}
							placeholder={'Введите ваш номер'}
							fullWidth
							margin='normal'
						/>

						<TextField
							type='text'
							name='education'
							value={values.education}
							onChange={handleChange}
							onBlur={handleBlur}
							label={'Образование'}
							select
							placeholder={'Введите ваше образование'}
							fullWidth
							margin='normal'
							helperText={errors.education}
							error={errors.education && touched.education}>
							{educationTypes.map((option) => (
								<MenuItem key={option} value={option}>
									{option}
								</MenuItem>
							))}
						</TextField>

						<TextField
							type='password'
							name='password'
							value={values.password}
							onChange={handleChange}
							label='Пароль'
							placeholder={'Введите ваш пароль'}
							autoComplete='new-password'
							fullWidth
							margin='normal'
						/>

						<TextField
							type='password'
							name='secondPassword'
							value={values.secondPassword}
							onChange={handleChange}
							onBlur={handleBlur}
							label={'Пароль'}
							placeholder={'Введите ваш пароль'}
							autoComplete='new-password'
							fullWidth
							margin='normal'
							helperText={errors.password}
							error={errors.password && touched.secondPassword}
						/>

						{error ? (
							<Typography color='red' variant='body1'>
								{error}
							</Typography>
						) : null}

						{success ? (
							<Typography color='green' variant='body1'>
								{success}
							</Typography>
						) : null}

						<Button variant='outlined' type='submit' sx={{ mt: 2 }}>
							Продолжить
						</Button>
					</Box>
				)}
			</Formik>
		</>
	);
};

export default Registration;
