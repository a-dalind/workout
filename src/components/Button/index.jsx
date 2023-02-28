import clsx from 'clsx';

import styles from './Button.module.scss';

const Button = ({
	children,
	className,
	disabled,
	onClick,
	modifiers = [],
	...restProps
}) => {
	const mod = {
		large: false,
		wide: false,
		primary: false,
		link: false,
		red: false,
		inverse: false,
		inverseGrey: false,
		skeleton: false
	};
	modifiers.forEach(item => {
		mod[item] = true;
	});

	return (
		<button
			className={clsx(
				className,
				styles.btn,
				mod.link && styles['btn--link'],
				mod.primary && styles['btn--primary'],
				mod.blue && styles['btn--blue'],
				mod.red && styles['btn--red'],
				mod.skeleton && styles['btn--skeleton']
			)}
			onClick={onClick}
			disabled={disabled}
			type='button'
			{...restProps}
		>
			{children}
		</button>
	);
};

export default Button;
