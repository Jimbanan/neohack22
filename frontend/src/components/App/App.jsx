import { useEffect } from 'react';
import { userLocalStorage } from '../../core/LocalStorage/UserLocalStorage';
import { BrowserRouter as Router } from 'react-router-dom';
import { setLoggedIn } from '../../core/store/LoginSlice';
import React from 'react';
import Routes from '../../core/routes/Routes';
import { useDispatch } from 'react-redux';

function App() {
	const User = userLocalStorage.getItem();

	const dispatch = useDispatch();

	useEffect(() => {
		if (User) {
			dispatch(setLoggedIn(true));
		}
	}, [dispatch, User]);

	return (
		<Router>
			<div className='App'>
				<Routes />
			</div>
		</Router>
	);
}

export default App;
