import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { BASE } from '../../../core/config/RoutesConfig';
import { useNavigate } from 'react-router-dom';
import { userLocalStorage } from '../../../core/LocalStorage/UserLocalStorage';
import allyProps from '../../../helpers/allyProps';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../TabPanel';
import Button from '@mui/material/Button';
import StudentInfo from './StudentInfo';
import EditPersonalInfo from './EditPersonalInfo';
import CoursesList from '../../CoursesList/CoursesList';

const StudentAccount = () => {
	const [value, setValue] = useState(0);
	const [isEdit, setEdit] = useState(false);
	const User = userLocalStorage.getItem();
	const navigate = useNavigate();
	const bgColor = '#80D9CE';

	const handleClick = () => setEdit(true);
	const handleClose = () => setEdit(false);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const infoContent = isEdit ? (
		<EditPersonalInfo handleClose={handleClose} {...User} />
	) : (
		<StudentInfo {...User} handleClick={handleClick} />
	);

	return (
		<>
			<Grid
				sx={{
					backgroundColor: bgColor,
					gridRow: '1/3',
					padding: '32px 25px',
				}}>
				<Typography
					color='#fff'
					align='center'
					sx={{ mt: 10 }}
					variant='body1'>
					ЛИЧНЫЙ КАБИНЕТ
				</Typography>

				<Box
					sx={{
						bgcolor: bgColor,
						display: 'flex',
						mt: 3,
					}}>
					<Tabs
						orientation='vertical'
						variant='fullWidth'
						value={value}
						onChange={handleChange}
						aria-label='Vertical tabs example'
						sx={{
							borderRight: 1,
							spacing: 5,
							borderColor: 'divider',
							width: '250px',
						}}>
						<Tab
							sx={{ color: '#fff' }}
							label='Профиль'
							{...allyProps(0)}
						/>
						<Tab
							sx={{ color: '#fff' }}
							label='Мои курсы'
							{...allyProps(1)}
						/>
					</Tabs>
				</Box>

				<Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
					<Button
						sx={{ color: '#fff' }}
						onClick={() => navigate(BASE)}
						component='a'>
						На главную
					</Button>
				</Box>
			</Grid>

			<Grid sx={{ gridRow: '2/3', p: 5 }}>
				<TabPanel width='600px' value={value} index={0}>
					<Typography component='h2' variant='h5'>
						Профиль
					</Typography>
					{infoContent}
				</TabPanel>

				<TabPanel width='1000px' value={value} index={1}>
					<Typography component='h2' variant='h5'>
						Курсы
					</Typography>
					<CoursesList />
				</TabPanel>
			</Grid>
		</>
	);
};

export default StudentAccount;
