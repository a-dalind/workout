import Auth from '../pages/auth';
import Main from '../pages/main';
import NewWorkout from '../pages/newWorkout';
import Profile from '../pages/profile';
import Workouts from '../pages/workouts';

const routes = [
	{
		path: '/',
		component: Main,
		// булево лучше писать через is
		isAuth: false
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/workouts',
		component: Workouts,
		isAuth: true
	}
];

export default routes;
