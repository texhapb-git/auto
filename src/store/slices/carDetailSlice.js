import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import carsService from '../../services/cars.service';
import usersService from '../../services/users.service';

const NAME_SPACE = 'carDetail';

export const fetchCar = createAsyncThunk(
	`${NAME_SPACE}/fetchCar`,
	async function (id, { rejectWithValue }) {
		try {
			const carResponse = await carsService.getCarById(id);

			if (!carResponse.status === 200) {
				throw new Error('Server error');
			}

			const car = await carResponse.data;

			const userResponse = await usersService.getUserById(car.userId);

			if (!userResponse.status === 200) {
				throw new Error('Server error');
			}

			const user = await userResponse.data;

			car.userInfo = user;

			return car;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const carsDetailSlice = createSlice({
	name: NAME_SPACE,
	initialState: {
		carInfo: {},
		loading: true,
		error: null
	},
	reducers: {

	},
	extraReducers: {
		[fetchCar.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[fetchCar.fulfilled]: (state, action) => {
			state.loading = false;
			state.carInfo = action.payload;
		},
		[fetchCar.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	}
});

export const getCarDetailLoading = (state) => state.carDetail.loading;
export const getCarDetailError = (state) => state.carDetail.error;
export const getCarDetail = (state) => state.carDetail.carInfo;

// export const {  } = carsDetailSlicee.actions;

export default carsDetailSlice.reducer;