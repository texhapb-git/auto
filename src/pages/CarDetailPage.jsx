import cars from '../db/cars.json';
import users from '../db/users.json';

const CarDetailPage = () => {

	const car = cars[0];
	console.log(car);

	return (
		<div>CarDetail</div>

	);
};

export { CarDetailPage };