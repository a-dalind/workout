import styles from './Preloader.module.scss';

const Preloader = () => {
	return (
		<div className={styles.wrapper}>
			<div id='circleG'>
				<div id='circleG_1' className={styles.circleG}></div>
				<div id='circleG_2' className={styles.circleG}></div>
				<div id='circleG_3' className={styles.circleG}></div>
			</div>
		</div>
	);
};

export default Preloader;
