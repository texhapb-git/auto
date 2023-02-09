
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupPassword from 'yup-password';

import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';

import { TextField } from '../TextField';
import { Button } from '../Button';

import styles from './SignUpForm.module.scss';

YupPassword(yup);

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
	firstName: yup.string().matches(/^([^0-9]*)$/, 'Имя может содержать только буквы').required('Поле обязательно для заполнения'),
	lastName: yup.string().matches(/^([^0-9]*)$/, 'Фамилия может содержать только буквы'),
	email: yup.string().email('Введите корректный email').required('Поле обязательно для заполнения'),
	password: yup.string().required('Поле обязательно для заполнения'),
	passwordConfirm: yup.string().required('Поле обязательно для заполнения').oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
	phone: yup.string().matches(/^([0-9]*)$/, 'Телефон может содержать только цифры').length(10, 'Телефон должен содержать 10 цифр').required('Поле обязательно для заполнения'),
});

const SignUpForm = () => {
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
		<div className={styles.signUpForm}>

			<div className={styles.signUpFormTitle}>Создать аккаунт</div>

			<form noValidate autoComplete="off" onSubmit={handleSubmit(onFormSubmit)}>

				<TextField
					label="Имя"
					value=""
					name="firstName"
					register={register}
					required
					error={!!errors?.firstName}
					errorMessage={errors?.firstName?.message}
				/>
				<TextField
					label="Фамилия"
					value=""
					name="lastName"
					register={register}
					error={!!errors?.lastName}
					errorMessage={errors?.lastName?.message}
				/>
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

				<TextField
					type="password"
					label="Повторите пароль"
					value=""
					name="passwordConfirm"
					required
					register={register}
					error={!!errors?.passwordConfirm}
					errorMessage={errors?.passwordConfirm?.message} />

				<TextField
					label="Телефон"
					value=""
					name="phone"
					register={register}
					required
					error={!!errors?.phone}
					errorMessage={errors?.phone?.message}
				/>

				<div className={styles.signUpFormErrors}>
					Неправильный email или пароль
				</div>

				<div className={styles.signUpFormButtons}>
					<Button buttonType="submit">Создать аккаунт</Button>
					<div className={styles.signUpFormLink}>
						<Link to="/auth">Войти</Link>
					</div>
				</div>

			</form>
		</div>
	);
};

export { SignUpForm };