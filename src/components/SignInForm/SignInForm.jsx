
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';

import { TextField } from '../TextField';
import { Button } from '../Button';

import styles from './SignInForm.module.scss';

const schema = yup.object().shape({
	email: yup.string().email('Введите корректный email').required('Поле обязательно для заполнения'),
	password: yup.string().required('Поле обязательно для заполнения')
});

const SignInForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	});


	const onFormSubmit = (formData) => {

		toast('Данные обновлены!');
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

				<div className={styles.signInFormErrors}>
					Неправильный email или пароль
				</div>

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