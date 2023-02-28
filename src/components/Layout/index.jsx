import cn from 'clsx';
import React from 'react';

import { Footer, Header } from '../index';

import styles from './Layout.module.scss';

const Layout = ({
	children,
	bgImg,
	heading = '',
	backLink = '/',
	className
}) => {
	return (
		<div
			className={cn(styles.wrapper, {
				[styles.otherPage]: !!heading
			})}
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<Header title={'SportApp'} backlink={backLink} />
			{heading && <h2 className={styles.heading}>{heading}</h2>}

			{children && <div className={styles.mainContent}>{children}</div>}
			<Footer />
		</div>
	);
};

export default Layout;
