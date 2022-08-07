import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { fetchCourse } from '../../core/store/CoursesSlice';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const CoursePage = () => {
	const [course, setCourse] = useState({});
	const dispatch = useDispatch();
	const { courseId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchCourse(courseId)).unwrap().then(setCourse);
	}, [dispatch, courseId]);

	const handleClick = () => {
		navigate(`/lessons/${courseId}`);
	};

	const showInterests = (interests) => {
		if (interests) {
			return course.interests.map((item) => {
				return item.interesName + ' ';
			});
		}
		return null;
	};

	return (
		<Box sx={{ width: '500px', mt: 5 }}>
			<TableContainer sx={{ width: '100%', mt: 5 }} component={Paper}>
				<Table sx={{ width: '100%' }} aria-label='simple table'>
					<TableBody>
						<TableRow
							key={'Название'}
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
								},
							}}>
							<TableCell component='th' scope='row'>
								Название курса
							</TableCell>
							<TableCell align='right'>
								{course.courseName}
							</TableCell>
						</TableRow>
						<TableRow
							key={'Интересы'}
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
								},
							}}>
							<TableCell component='th' scope='row'>
								Интересы
							</TableCell>
							<TableCell align='right'>
								{showInterests(course.interests)}
							</TableCell>
						</TableRow>
						<TableRow
							key={'Уровень'}
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
								},
							}}>
							<TableCell component='th' scope='row'>
								Уровень курса
							</TableCell>
							<TableCell align='right'>{course.level}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<Paper sx={{ mt: 5 }} elevation={3}>
				<Box
					sx={{
						width: '100%',
						height: '60px',
						backgroundColor: '#80D9CE',
						p: 5,
					}}>
					<Typography>Состав курса</Typography>
				</Box>
				<TableContainer sx={{ width: '100%', p: 3 }} component={Paper}>
					<Table sx={{ width: '100%' }} aria-label='simple table'>
						<TableBody>
							<TableRow
								key={'Введение'}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}>
								<TableCell component='th' scope='row'>
									Введение
								</TableCell>
								<TableCell align='right'></TableCell>
							</TableRow>
							<TableRow
								key={'Основная часть'}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}>
								<TableCell component='th' scope='row'>
									Основная часть
								</TableCell>
								<TableCell align='right'></TableCell>
							</TableRow>
							<TableRow
								key={'Уровень'}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}>
								<TableCell component='th' scope='row'>
									Заключение
								</TableCell>
								<TableCell align='right'></TableCell>
							</TableRow>
							<TableRow
								key={'тестирование'}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}>
								<TableCell component='th' scope='row'>
									Итоговое тестирование
								</TableCell>
								<TableCell align='right'></TableCell>
							</TableRow>
							<TableRow
								key={'divider'}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}></TableRow>
						</TableBody>
					</Table>
					<Button
						onClick={handleClick}
						sx={{
							mt: 1,
							ml: 1,
							display: 'flex',
							justifyContent: 'flex-end',
						}}>
						Перейти к материалам курса
					</Button>
				</TableContainer>
			</Paper>
		</Box>
	);
};

export default CoursePage;
