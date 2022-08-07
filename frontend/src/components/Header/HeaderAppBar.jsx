import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAIN, BASE } from '../../core/config/RoutesConfig';
import { useDispatch } from 'react-redux';
import { userLocalStorage } from '../../core/LocalStorage/UserLocalStorage';
import { setLoggedIn } from '../../core/store/LoginSlice';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const HeaderAppBar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [fullName, setFullName] = useState('');
	const open = Boolean(anchorEl);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const User = userLocalStorage.getItem();

	useEffect(() => {
		setFullName(User.name + ' ' + User.surname);
	}, [User]);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Typography variant='h6' color='inherit' component='div'>
				{fullName}
			</Typography>
			<Tooltip title='Account settings'>
				<IconButton
					onClick={handleClick}
					size='small'
					sx={{ ml: 2 }}
					aria-controls={open ? 'account-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}>
					<Avatar sx={{ width: 32, height: 32 }}></Avatar>
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchorEl}
				id='account-menu'
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
				<MenuItem component='a' onClick={() => navigate(MAIN)}>
					<Avatar /> My account
				</MenuItem>
				<Divider />
				<MenuItem
					component='a'
					onClick={() => {
						navigate(BASE);
						userLocalStorage.removeItem();
						dispatch(setLoggedIn(false));
					}}>
					<ListItemIcon>
						<Logout fontSize='small' />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</>
	);
};

export default HeaderAppBar;
