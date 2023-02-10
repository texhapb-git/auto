
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { TextField } from '../TextField';
import { Button } from '../Button';

import { signInApp, authErrorSelector } from '../../store/slices/authSlice';

import styles from './SignInForm.module.scss';

const schema = yup.object().shape({
	email: yup.string().email('Введите корректный email').required('Поле обязательно для заполнения'),
	password: yup.string().required('Поле обязательно для заполнения')
});

const SignInForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	});

	const authError = useSelector(authErrorSelector);


	const onFormSubmit = (formData) => {
		dispatch(signInApp(formData))
			.unwrap()
			.then(() => {
				if (location.state?.referref?.pathname) {
					navigate(location.state.referref.pathname, { replace: true });
				}
			});
	};

	return (
		<div className={styles.signInForm}>

			<div className={styles.signInFormTitle}>Вход на сайт</div>

			<form noValidate autoComplete="off" onSubmit={handleSubmit(onFormSubmit)}>

				<TextField
					label="Email"
					value=""
					name="email"
					register={register}
					required
					error={!!errors?.email}
					errorMessage={errors?.email?.message}
				/>

				<TextField
					type="password"
					label="Пароль"
					value=""
					name="password"
					required
					register={register}
					error={!!errors?.password}
					errorMessage={errors?.password?.message} />

				{authError &&
					<div className={styles.signInFormErrors}>
						{authError}
					</div>
				}

				<div className={styles.signInFormButtons}>
					<Button buttonType="submit">Войти</Button>
					<div className={styles.signInFormLink}>
						<Link to="/auth/signup">Создать аккаунт</Link>
					</div>
				</div>

			</form>
		</div>
	);
};

export { SignInForm };