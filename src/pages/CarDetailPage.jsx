import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CarDetail } from '../components/CarDetail';
import { Spinner } from '../components/Spinner';

import cars from '../db/cars.json';

const CarDetailPage = () => {
	const [loading, setLoading] = useState(true);
	const { carId } = useParams();
	const car = cars.find(car => car._id === carId);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 1500);

		return () => clearTimeout(timeout);
	}, []);


	if (loading) {
		return (<Spinner />);
	}

	if (!car) {
		return (
			<h1>Объявление не найдено</h1>
		);
	}

	return (
		<CarDetail car={car} />
	);
};

export { CarDetailPage };