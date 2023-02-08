import httpService from './http.service';

const usersEndPoint = 'users/';

const usersService = {
	fetchAll: async () => {
		const response = await httpService.get(usersEndPoint);
		return response;
	},
	getUserById: async (userId) => {
		const { data } = await httpService.get(
			usersEndPoint + userId
		);
		return data;
	},
	createUser: async (userId, payload) => {
		const { data } = httpService.put(
			usersEndPoint + userId,
			payload
		);
		return data;
	}
};

export default usersService;