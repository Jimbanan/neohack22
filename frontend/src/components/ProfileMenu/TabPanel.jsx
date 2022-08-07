import Box from '@mui/material/Box';

function TabPanel({ width, children, value, index, classes, ...other }) {
	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && <Box sx={{ width: width }}>{children}</Box>}
		</div>
	);
}

export default TabPanel;
