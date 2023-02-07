import { useEffect, useState } from 'react';

import { CarsList } from '../components/CarsList';
import { Spinner } from '../components/Spinner';

import cars from '../db/cars.json';
cars = cars.sort((a, b) => b.dateCreate - a.dateCreate).slice(0, 6);

const MainPage = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 1500);

		return () => clearTimeout(timeout);
	}, [setLoading]);

	return (
		<>
			<h1>Объявления о продаже авто</h1>
			<p>Тут нужен вдохновляющий текст про сервис</p>

			{loading ?
				<Spinner />
				: <CarsList type="flat" title="Последние объявления" cars={cars} />
			}
		</>
	);
};

export { MainPage };