import bodyTypes from '../carsData/bodyTypes.json';
import colors from '../carsData/colors.json';
import engines from '../carsData/engines.json';
import transmissions from '../carsData/transmissions.json';
import gearTypes from '../carsData/gearTypes.json';

export function updateCarValues(car) {

	const updateObj = {};

	if (car?.bodyType) {
		updateObj.bodyType = bodyTypes.find(type => type.id === car.bodyType);
	}

	if (car?.color) {
		updateObj.color = colors.find(color => color.id === car.color);
	}

	if (car?.engine) {
		updateObj.engine = engines.find(engine => engine.id === car.engine);
	}

	if (car?.transmission) {
		updateObj.transmission = transmissions.find(transmission => transmission.id === car.transmission);
	}

	if (car?.gearType) {
		updateObj.gearType = gearTypes.find(gearType => gearType.id === car.gearType);
	}

	return { ...car, ...updateObj };
}