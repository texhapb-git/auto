import { CarsList } from '../components/CarsList';

import cars from '../db/cars.json';

const CarsPage = () => {
	return (
		<>
			<h1>Filter</h1>
			<CarsList type="list" cars={cars} />
		</>

	);
};

export { CarsPage };