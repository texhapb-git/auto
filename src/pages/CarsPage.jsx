import { useEffect, useState } from 'react';

import { CarsList } from '../components/CarsList';
import { Spinner } from '../components/Spinner';

import cars from '../db/cars.json';

const CarsPage = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 1500);

		return () => clearTimeout(timeout);
	}, [setLoading]);

	return (
		<>
			<h1>Filter</h1>
			{loading ?
				<Spinner />
				: <CarsList type="list" cars={cars} />
			}


		</>

	);
};

export { CarsPage };