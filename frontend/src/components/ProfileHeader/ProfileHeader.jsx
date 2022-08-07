import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeaderAppBar from '../Header/HeaderAppBar';

const ProfileHeader = () => {
	return (
		<Grid
			sx={{
				gridColumn: '2/3',
				width: '100%',
			}}>
			<Box sx={{ flexGrow: 1, height: '100%' }}>
				<AppBar
					sx={{
						height: '100%',
						p: 3,
						boxShadow: 0,
						backgroundColor: '#80D9CE',
					}}
					position='static'>
					<Toolbar variant='dense'>
						<Typography
							sx={{ flexGrow: 1 }}
							variant='h6'
							color='inherit'
							component='div'>
							Образовательная платформа
						</Typography>

						<HeaderAppBar />
					</Toolbar>
				</AppBar>
			</Box>
		</Grid>
	);
};

export default ProfileHeader;
