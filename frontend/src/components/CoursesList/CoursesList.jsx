import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCourses } from '../../core/store/CoursesSlice';
import Grid from '@mui/material/Grid';
import CourseItem from '../CourseItem/CourseItem';

const CoursesList = () => {
	const [allCourses, setCourses] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCourses()).unwrap().then(setCourses);
	}, [dispatch]);

	return (
		<>
			<Grid container sx={{ mt: 2 }} spacing={8}>
				{allCourses.map((course) => (
					<CourseItem
						key={course.id}
						id={course.id}
						courseLevel={course.level}
						courseName={course.courseName}
					/>
				))}
			</Grid>
		</>
	);
};

export default CoursesList;
