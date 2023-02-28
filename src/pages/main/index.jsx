import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { Button, Layout } from '../../components';

const Main = () => {
	const { isAuth } = useAuth();
	const navigate = useNavigate();

	return (
		<Layout bgImg={'images/ft-1.jpg'}>
			<Button
				modifiers={['primary']}
				onClick={() => {
					navigate(isAuth ? '/new-workout' : '/auth');
				}}
			>
				{isAuth ? 'New' : 'Sign in'}
			</Button>
		</Layout>
	);
};

export default Main;
