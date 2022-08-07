import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { fetchLesson } from '../../core/store/CoursesSlice';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CourseLessons = () => {
	const [lesson, setLesson] = useState([]);
	const { courseId } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchLesson(courseId)).unwrap().then(setLesson);
	}, [dispatch, courseId]);

	console.log(lesson);

	const handleClick = () => {
		navigate(-1);
	};

	const content =
		lesson.message === 'Такого урока не существует'
			? null
			: lesson.map((item) => {
					return (
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls='panel1a-content'
								id='panel1a-header'>
								<Typography>Урок {item.id}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>{item.lessonContent}</Typography>

								<Button
									sx={{
										mt: 1,
										display: 'flex',
										justifyContent: 'flex-end',
									}}>
									Пройти тест
								</Button>
							</AccordionDetails>
						</Accordion>
					);
			  });

	return (
		<Box sx={{ mt: 7 }}>
			<Typography variant='h4' component='h2'>
				Материалы курса
			</Typography>
			<Box sx={{ mt: 3 }}>
				{content}

				<Button
					onClick={handleClick}
					sx={{
						mt: 1,
						ml: 1,
						display: 'flex',
						justifyContent: 'flex-end',
					}}>
					Перейти назад
				</Button>
			</Box>
		</Box>
	);
};

export default CourseLessons;
