import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const PersonalInfo = ({
	name,
	surname,
	birthDate,
	education,
	location,
	email,
	number,
	handleClick,
}) => {
	return (
		<>
			<TableContainer sx={{ width: '600px', mt: 5 }} component={Paper}>
				<Table sx={{ width: '100%' }} aria-label='simple table'>
					<TableBody>
						<TableRow
							key={'Имя'}
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
								},
							}}>
							<TableCell component='th' scope='row'>
								Имя
							</TableCell>
							<TableCell align='right'>{name}</TableCell>
						</TableRow>
						<TableRow
							key={'Фамилия'}
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
								},
							}}>
							<TableCell component='th' scope='row'>
								Фамилия
							</TableCell>
							<TableCell align='right'>{surname}</TableCell>
						</TableRow>
						<TableRow
							key={'Дата'}
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
								},
							}}>
							<TableCell component='th' scope='row'>
								Дата рождения
							</TableCell>
							<TableCell align='right'>{birthDate}</TableCell>
						</TableRow>
						<TableRow
							key={'образование'}
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
								},
							}}>
							<TableCell component='th' scope='row'>
								Уровень образования
							</TableCell>
							<TableCell align='right'>{education}</TableCell>
						</TableRow>
						<TableRow
							key={'город'}
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
								},
							}}>
							<TableCell component='th' scope='row'>
								Город
							</TableCell>
							<TableCell align='right'>{location}</TableCell>
						</TableRow>
						<TableRow
							key={'почта'}
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
								},
							}}>
							<TableCell component='th' scope='row'>
								Почта
							</TableCell>
							<TableCell align='right'>{email}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			<Button
				onClick={handleClick}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					mt: 3,
				}}
				variant='outlined'>
				редактировать
			</Button>
		</>
	);
};

export default PersonalInfo;
