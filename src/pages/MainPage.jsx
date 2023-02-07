import { CarsList } from '../components/CarsList';

import cars from '../db/cars.json';
cars = cars.sort((a, b) => b.dateCreate - a.dateCreate).slice(0, 6);

const MainPage = () => {
	return (
		<CarsList type="flat" title="Последние объявления" cars={cars} />
	);
};

export { MainPage };