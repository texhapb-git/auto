import * as yup from 'yup';

const schema = yup.object().shape({
	email: yup.string().required('Поле обязательно для заполнения').matches(/^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*\.[a-zA-Z0-9]{1,20}$/, 'Введите корректный email'),
	password: yup.string().required('Поле обязательно для заполнения')
});

export { schema };