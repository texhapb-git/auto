import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Spinner } from '../components/Spinner';

import { isAuthSelector, authUserIdSelector } from '../store/slices/authSlice';

const PersonalCarEditPage = () => {
	const { carId } = useParams();
	const [loading, setLoading] = useState(true);

	const isAuth = useSelector(isAuthSelector);
	const userId = useSelector(authUserIdSelector);



	console.log(carId);


	useEffect(() => {
		if (loading) {

		}
	}, [loading]);

	if (loading) {
		return <Spinner />;
	}
	return (
		<>sdfdssd</>
	);
};

export { PersonalCarEditPage };