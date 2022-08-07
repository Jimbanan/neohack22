import { configureStore } from '@reduxjs/toolkit';
import registration from './RegistrationSlice';
import login from './LoginSlice';
import courses from './CoursesSlice';

const store = configureStore({
	reducer: { registration, login, courses },
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
