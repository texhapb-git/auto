import httpService from './http.service';

const carsEndPoint = 'cars/';

const carsService = {
	fetch: async (params = {}) => {
		const response = await httpService.get(carsEndPoint, {
			params: params
		});

		return response;
	},
	getCarById: async (carId) => {
		const response = await httpService.get(
			carsEndPoint + carId
		);
		return response;
	},
	createCar: async (carId, payload) => {
		const response = httpService.put(
			carsEndPoint + carId,
			payload
		);
		return response;
	},
	deleteCar: async (carId, payload) => {
		const response = httpService.delete(carsEndPoint + carId);
		return response;
	}
};

export default carsService;