import httpService from './http.service';

const usersEndPoint = 'users/';

const usersService = {
	fetchAll: async () => {
		const response = await httpService.get(usersEndPoint);
		return response;
	},
	getUserById: async (userId) => {
		const response = await httpService.get(
			usersEndPoint + userId
		);
		return response;
	},
	createUser: async (userId, payload) => {
		const response = httpService.put(
			usersEndPoint + userId,
			payload
		);
		return response;
	}
};

export default usersService;