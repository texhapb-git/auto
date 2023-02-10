import httpService from './http.service';

const usersEndPoint = 'users/';

const usersService = {
	fetch: async (params) => {
		const response = await httpService.get(usersEndPoint, {
			params: params
		});
		return response;
	},
	getUserById: async (userId) => {
		const response = await httpService.get(
			usersEndPoint + userId
		);
		return response;
	},
	createUser: async (payload) => {
		const response = httpService.post(usersEndPoint,
			payload
		);
		return response;
	}
};

export default usersService;