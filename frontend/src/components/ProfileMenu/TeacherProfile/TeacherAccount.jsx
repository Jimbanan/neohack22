import { useState } from 'react';
import { BASE } from '../../../core/config/RoutesConfig';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import allyProps from '../../../helpers/allyProps';
import TabPanel from '../TabPanel';
import Button from '@mui/material/Button';
import TeacherInfo from './TeacherInfo';
import CoursesList from '../../CoursesList/CoursesList';

const TeacherAccount = () => {
	const [value, setValue] = useState(0);
	const navigate = useNavigate();
	const bgColor = '#80D9CE';

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<Grid
				sx={{
					backgroundColor: bgColor,
					gridRow: '1/3',
					padding: '32px 25px',
				}}>
				<Typography
					sx={{ mt: 10 }}
					color='#fff'
					align='center'
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
							label='Все курсы'
							{...allyProps(1)}
						/>
						<Tab
							sx={{ color: '#fff' }}
							label='Создать курс'
							{...allyProps(2)}
						/>
						<Tab
							sx={{ color: '#fff' }}
							label='Создать тест'
							{...allyProps(3)}
						/>
						<Tab
							sx={{ color: '#fff' }}
							label='Статистика'
							{...allyProps(4)}
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
					<TeacherInfo
						name='Иван'
						surname='Иванов'
						email='test@test.ru'
						location='Москва'
						password='pass'
					/>
				</TabPanel>
				<TabPanel width='1000px' value={value} index={1}>
					<Typography component='h2' variant='h5'>
						Все курсы
					</Typography>
					<CoursesList />
				</TabPanel>

				<TabPanel width='600px' value={value} index={2}>
					<Typography component='h2' variant='h5'>
						Создать курс
					</Typography>
				</TabPanel>

				<TabPanel width='600px' value={value} index={3}>
					<Typography component='h2' variant='h5'>
						Создать тест
					</Typography>
				</TabPanel>

				<TabPanel width='600px' value={value} index={4}>
					<Typography component='h2' variant='h5'>
						Статистика
					</Typography>
				</TabPanel>
			</Grid>
		</>
	);
};

export default TeacherAccount;
