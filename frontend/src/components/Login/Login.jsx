import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../core/store/LoginSlice';
import { setLoggedIn, setOpenedLoginMenu } from '../../core/store/LoginSlice';
import { userLocalStorage } from '../../core/LocalStorage/UserLocalStorage';
import { clearLoadingStatus } from '../../core/store/LoginSlice';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = ({ handleClose, open }) => {
	const dispatch = useDispatch();
	const authLoadingStatus = useSelector(
		(state) => state.login.authLoadingStatus
	);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState();

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 300,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
		textAlign: 'center',
	};

	const handleClick = () => {
		handleClose();
		dispatch(clearLoadingStatus(false));
	};

	const onChangeInput = (e, func) => {
		func(e.target.value);
	};

	const onSubmit = (e) => {
		setError('');
		dispatch(clearLoadingStatus(false));
		e.preventDefault();

		dispatch(login({ email, password }))
			.unwrap()
			.then((res) => {
				setError(res.message ? res.message : null);
				userLocalStorage.setItem(res);
				dispatch(setLoggedIn(true));
				dispatch(setOpenedLoginMenu(false));
				setEmail('');
				setPassword('');
			})
			.catch((res) => {
				setError('Неверный логин или пароль');
			});
	};

	return (
		<Modal
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
			onClose={handleClick}
			open={open}>
			<Box onSubmit={(e) => onSubmit(e)} component='form' sx={style}>
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					Вход в личный кабинет
				</Typography>

				<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
					<TextField
						value={email}
						onChange={(e) => onChangeInput(e, setEmail)}
						id='input-with-sx'
						label='Логин'
						variant='standard'
						size='big'
						margin='normal'
						fullWidth
						type='email'
						error={authLoadingStatus === 'error'}
					/>
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
					<TextField
						value={password}
						onChange={(e) => onChangeInput(e, setPassword)}
						error={authLoadingStatus === 'error'}
						id='input-with-sx'
						label='Пароль'
						variant='standard'
						size='big'
						type='password'
						margin='normal'
						fullWidth
					/>
				</Box>
				{error ? (
					<Typography color='red' variant='body1'>
						{error}
					</Typography>
				) : null}
				<Button variant='outlined' type='submit' sx={{ mt: 2 }}>
					Продолжить
				</Button>
			</Box>
		</Modal>
	);
};

export default Login;
