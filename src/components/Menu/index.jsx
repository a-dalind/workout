import cn from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Menu.module.scss';

const Menu = ({ isOpen }) => {
	// console.log(isOpen);
	const logoutHandler = () => {};

	return (
		<div
			className={cn(styles.menu, {
				[styles.open]: isOpen
			})}
		>
			<ul className={styles.list}>
				{headerMenu.map((item, index) => (
					<li className={styles.listItem} key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li className={styles.listItem} key={'logout'}>
					<button onClick={logoutHandler} className={styles.logout}>
						Logout
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Menu;

const headerMenu = [
	{
		title: 'Workouts',
		link: '/workouts'
	},
	{
		title: 'Create new',
		link: '/new-workout'
	},
	{
		title: 'Profile',
		link: '/profile'
	}
];
