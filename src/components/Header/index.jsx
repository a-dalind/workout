import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { Hamburger } from '../index';

import styles from './Header.module.scss';

const Header = ({ title, backLink = '/' }) => {
	const { isAuth } = useAuth();

	const { pathname } = useLocation();
	const navigate = useNavigate();

	return (
		<header className={styles.wrapper}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink);
					}}
					className={styles.backlink}
					type={'button'}
				>
					<BsArrowLeft />
				</button>
			) : (
				<button
					onClick={() => {
						navigate(isAuth ? '/profile' : '/auth');
					}}
					className={styles.user}
					type={'button'}
				>
					<AiOutlineUser />
				</button>
			)}
			<Hamburger />
		</header>
	);
};

export default Header;
