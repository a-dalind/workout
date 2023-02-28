import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';

import { useOnClickOutside } from '../../hooks/useOnClickOutside';

import Menu from '../Menu';

import styles from './Hamburger.module.scss';

const Hamburger = () => {
	// const [isOpen, setIsOpen] = useState(false);
	const { isOpen, setIsOpen, ref } = useOnClickOutside(false);

	return (
		<div className={styles.wrapper} ref={ref}>
			<button
				className={styles.button}
				type='button'
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				{isOpen ? <RxCross2 /> : <HiMenuAlt3 />}
			</button>

			<Menu isOpen={isOpen} />
		</div>
	);
};

export default Hamburger;
