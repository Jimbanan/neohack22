import { Outlet } from 'react-router-dom';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';

import './ProfilePage.scss';

const ProfilePage = () => {
	return (
		<div className='profile-page'>
			<Outlet />
			<ProfileHeader />
		</div>
	);
};

export default ProfilePage;
