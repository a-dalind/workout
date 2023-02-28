import clsx from 'clsx';

import styles from './Input.module.scss';

const Input = ({
	register,
	options,
	error,
	name,
	children,
	className,
	modifiers = [],
	...rest
}) => {
	const mod = {
		wide: false
	};
	modifiers.forEach(item => {
		mod[item] = true;
	});

	return (
		<div className={styles.wrapper}>
			<input
				{...register(name, options)}
				{...rest}
				className={clsx(
					className,
					styles.input,
					mod.primary && styles['input--wide']
				)}
			>
				{children}
			</input>

			{error && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
};

export default Input;
