import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input, Layout, Preloader } from '../../components';

import styles from './Auth.module.scss';

const isLoading = false;
const isLoadingAuth = false;

const Auth = () => {
	const [type, setType] = useState('auth');
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	});
	const onSubmit = data => {
		console.log(data);
	};

	return (
		<Layout bgImg={'images/ft-2.jpg'}>
			<div className={styles.wrapper}>
				<h2 className={styles.heading}>Sign in</h2>
				{(isLoading || isLoadingAuth) && <Preloader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.inputWrapper}>
						<Input
							placeholder={'Enter email'}
							name={'email'}
							type={'text'}
							error={errors?.email?.message}
							register={register}
							options={{
								required: 'Email is required'
							}}
						></Input>
						{/*<input*/}
						{/*	{...register('email', {*/}
						{/*		required: 'Email is required'*/}
						{/*	})}*/}
						{/*/>*/}

						<Input
							placeholder={'Password email'}
							name={'password'}
							type={'password'}
							error={errors?.password?.message}
							register={register}
							options={{
								required: 'Password is required'
							}}
						></Input>
					</div>
					{/*<div className={styles.inputWrapper}>*/}
					{/*	<Input placeholder={'Enter password'}></Input>*/}
					{/*</div>*/}
					<div className={styles.btns}>
						<Button
							modifiers={['primary']}
							type={'submit'}
							clickHandler={() => {
								setType('auth');
							}}
						>
							Sign in
						</Button>
						<Button
							modifiers={['primary']}
							type={'button'}
							clickHandler={() => {
								setType('register');
							}}
						>
							Sign up
						</Button>
					</div>
				</form>
			</div>
		</Layout>
	);
};

export default Auth;
