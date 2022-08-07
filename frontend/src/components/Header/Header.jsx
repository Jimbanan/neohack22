import { useSelector } from 'react-redux';
import { setOpenedLoginMenu } from '../../core/store/LoginSlice';
import { useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Login from '../Login/Login';
import { useNavigate } from 'react-router-dom';
import { REGISTRATION, BASE } from '../../core/config/RoutesConfig';
import Box from '@mui/material/Box';
import HeaderAppBar from './HeaderAppBar';

const Header = () => {
	const isOpenLoginMenu = useSelector((state) => state.login.isOpenLoginMenu);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

	const handleOpen = () => dispatch(setOpenedLoginMenu(true));
	const handleClose = () => dispatch(setOpenedLoginMenu(false));

	const authButtons = (
		<>
			<Button
				component='a'
				onClick={() => navigate(REGISTRATION)}
				sx={{ mr: 2 }}
				color='inherit'>
				Регистрация
			</Button>

			<Button onClick={handleOpen} sx={{ mr: 2 }} color='inherit'>
				Войти
			</Button>
		</>
	);

	const menuContent = isLoggedIn ? <HeaderAppBar /> : authButtons;

	return (
		<>
			<AppBar position='static' sx={{ backgroundColor: '#80D9CE' }}>
				<Toolbar>
					<Box sx={{ flexGrow: 1, display: 'flex' }}>
						<Typography variant='h6' component='div'>
							Образовательная платформа
						</Typography>
						<Button
							component='a'
							onClick={() => navigate(BASE)}
							sx={{ ml: 5 }}
							color='inherit'>
							На главную
						</Button>
					</Box>

					{menuContent}
					<Login open={isOpenLoginMenu} handleClose={handleClose} />
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Header;
