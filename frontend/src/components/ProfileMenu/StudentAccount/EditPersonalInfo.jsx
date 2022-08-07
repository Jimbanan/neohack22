import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { updateData } from '../../../core/store/LoginSlice';
import { useState } from 'react';
import { userLocalStorage } from '../../../core/LocalStorage/UserLocalStorage';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BirthDateMask from '../../../shared/BirthDateMask';
import MenuItem from '@mui/material/MenuItem';

const EditPersonalInfo = ({
	name,
	surname,
	birthDate,
	education,
	location,
	email,
	password,
	number = '4343',
	handleClose,
}) => {
	const dispatch = useDispatch();
	const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
	const regDate = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
	const [successMessage, setSuccessMessage] = useState('');

	const parseBirthDate = (date) => {
		const arrOfDates = date.match(/\d+/g);

		return arrOfDates[2] + '-' + arrOfDates[1] + '-' + arrOfDates[0];
	};
	const parsedBirthDate = parseBirthDate(birthDate);

	const transformBirthDate = (date) => {
		const arrOfDates = date.match(/\d+/g);

		return arrOfDates[2] + '-' + arrOfDates[1] + '-' + arrOfDates[0];
	};

	const educationTypes = ['Среднее общее', 'Неоконченное высшее', 'Высшее'];

	return (
		<>
			<Formik
				initialValues={{
					name: name,
					surname: surname,
					email,
					birthDate: parsedBirthDate,
					password,
					location,
					number,
					education,
				}}
				validate={(values) => {
					const errors = {};

					if (!values.name || values.name.length < 3) {
						errors.name = 'Введите имя';
					}

					if (!values.surname || values.surname.length < 3) {
						errors.surname = 'Введите фамилию';
					}

					if (!regDate.test(values.birthDate)) {
						errors.birthDate = 'Введите дату рождения';
					}

					if (!values.location || values.location.length < 3) {
						errors.location = 'Введите ваш город';
					}

					if (!values.education) {
						errors.education = 'Введите  образование';
					}

					if (!regEmail.test(values.email)) {
						errors.email = 'Неверно введен email адрес';
					}

					return errors;
				}}
				onSubmit={(values) => {
					const data = {
						id: userLocalStorage.getItem().id,
						name: values.name,
						surname: values.surname,
						email: values.email,
						birthDate: transformBirthDate(values.birthDate),
						location: values.location,
						number: values.number,
						education: values.education,
						password: values.password,
					};

					userLocalStorage.setItem({
						...data,
						roles: [{ name: 'STUDENT' }],
					});

					dispatch(updateData(data))
						.unwrap()
						.then((res) => {
							setSuccessMessage(res.message);
							setTimeout(() => {
								handleClose();
							}, 2000);
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
					<Grid
						component='form'
						onSubmit={handleSubmit}
						sx={{ width: '600px', mt: 3, p: 2 }}
						container
						spacing={2}>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<Typography component='p' variant='h6'>
								Ваше имя
							</Typography>
							<TextField
								sx={{ width: '250px' }}
								type='text'
								name='name'
								value={values.name}
								onChange={handleChange}
								size='small'
								margin='normal'
								onBlur={handleBlur}
								helperText={errors.name}
								error={errors.name && touched.name}
							/>
						</Box>

						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<Typography component='p' variant='h6'>
								Ваша фамилия
							</Typography>
							<TextField
								sx={{ width: '250px' }}
								type='text'
								name='surname'
								value={values.surname}
								onChange={handleChange}
								size='small'
								margin='normal'
								onBlur={handleBlur}
								helperText={errors.surname}
								error={errors.surname && touched.surname}
							/>
						</Box>

						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<Typography component='p' variant='h6'>
								Ваша почта
							</Typography>

							<TextField
								sx={{ width: '250px' }}
								type='text'
								name='email'
								value={values.email}
								onChange={handleChange}
								size='small'
								margin='normal'
								onBlur={handleBlur}
								helperText={errors.email}
								error={errors.email && touched.email}
							/>
						</Box>

						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<Typography component='p' variant='h6'>
								Ваша дата рождения
							</Typography>

							<TextField
								sx={{ width: '250px' }}
								type='text'
								name='birthDate'
								value={values.birthDate}
								onChange={handleChange}
								InputProps={{
									inputComponent: BirthDateMask,
								}}
								size='small'
								margin='normal'
								onBlur={handleBlur}
								helperText={errors.birthDate}
								error={errors.birthDate && touched.birthDate}
							/>
						</Box>

						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<Typography component='p' variant='h6'>
								Ваш город
							</Typography>
							<TextField
								sx={{ width: '250px' }}
								type='text'
								name='location'
								value={values.location}
								onChange={handleChange}
								size='small'
								margin='normal'
								onBlur={handleBlur}
								helperText={errors.location}
								error={errors.location && touched.location}
							/>
						</Box>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<Typography component='p' variant='h6'>
								Ваш номер телефона
							</Typography>
							<TextField
								sx={{ width: '250px' }}
								type='text'
								name='number'
								value={values.number}
								onChange={handleChange}
								size='small'
								margin='normal'
							/>
						</Box>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<Typography component='p' variant='h6'>
								Ваше образование
							</Typography>

							<TextField
								sx={{ width: '250px' }}
								type='text'
								name='education'
								value={values.education}
								onChange={handleChange}
								size='small'
								select
								helperText={errors.education}
								error={errors.education && touched.education}
								margin='normal'
								onBlur={handleBlur}>
								{educationTypes.map((option) => (
									<MenuItem key={option} value={option}>
										{option}
									</MenuItem>
								))}
							</TextField>
						</Box>

						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<Button
								onClick={handleClose}
								sx={{
									display: 'flex',
									justifyContent: 'center',
									mt: 3,
								}}
								variant='outlined'>
								Отменить
							</Button>

							<Button
								type='submit'
								sx={{
									display: 'flex',
									justifyContent: 'center',
									mt: 3,
								}}
								variant='outlined'>
								Сохранить
							</Button>
						</Box>
						{successMessage ? (
							<Typography
								sx={{ mt: 2 }}
								color='green'
								variant='body1'>
								{successMessage}
							</Typography>
						) : null}
					</Grid>
				)}
			</Formik>
		</>
	);
};

export default EditPersonalInfo;
