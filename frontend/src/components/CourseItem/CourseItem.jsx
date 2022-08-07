import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const CourseItem = ({ id, courseName, courseLevel }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/course/${id}`);
	};

	return (
		<Grid item xs={12} md={4}>
			<Card sx={{ width: '100%' }}>
				<CardContent>
					<Typography variant='h5' component='div'>
						{courseName}
					</Typography>
					<Typography sx={{ mt: 2 }} variant='body2'>
						{courseLevel}
					</Typography>
				</CardContent>
				<CardActions>
					<Button onClick={handleClick} size='small'>
						Перейти на страницу курса
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default CourseItem;
