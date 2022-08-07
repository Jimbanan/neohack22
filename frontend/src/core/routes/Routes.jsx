import { Route, Routes } from 'react-router-dom';
import { ProfilePage, MainPage } from '../../pages';
import {
	BASE,
	REGISTRATION,
	MAIN,
	BROWSE_COURSE,
	LESSONS,
} from '../config/RoutesConfig';
import { userLocalStorage } from '../LocalStorage/UserLocalStorage';
import { STUDENT } from '../../helpers/roles';
import Registration from '../../components/Registration/Registration';
import StudentAccount from '../../components/ProfileMenu/StudentAccount/StudentAccount';
import TeacherAccount from '../../components/ProfileMenu/TeacherProfile/TeacherAccount';
import CoursesList from '../../components/CoursesList/CoursesList';
import CoursePage from '../../components/CoursePage/CoursePage';
import CourseLessons from '../../components/CourseLessons/CourseLessons';

const AppRoutes = () => {
	const User = userLocalStorage.getItem();
	const role = User ? User.role : null;

	return (
		<Routes>
			<Route path={BASE} element={<MainPage />}>
				<Route path={BASE} element={<CoursesList />} />
				<Route path={REGISTRATION} element={<Registration />} />
				<Route path={BROWSE_COURSE} element={<CoursePage />}></Route>
				<Route path={LESSONS} element={<CourseLessons />}></Route>
			</Route>
			<Route path={MAIN} element={<ProfilePage />}>
				<Route
					path={MAIN}
					element={
						role === STUDENT ? (
							<StudentAccount />
						) : (
							<TeacherAccount />
						)
					}
				/>
			</Route>
		</Routes>
	);
};

export default AppRoutes;
