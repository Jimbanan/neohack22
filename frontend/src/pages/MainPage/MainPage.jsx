import Header from '../../components/Header/Header';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
	return (
		<>
			<Header />
			<Container sx={{ mt: 2 }}>
				<Outlet />
			</Container>
		</>
	);
};

export default MainPage;
