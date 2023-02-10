import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import carsService from '../../services/cars.service';

const NAME_SPACE = 'personalCars';

export const fetchPersonalCarsList = createAsyncThunk(
	`${NAME_SPACE}/fetchPersonalCarsList`,
	async function (params, { rejectWithValue }) {
		try {
			const response = await carsService.fetch(params);

			if (!response.status === 200) {
				throw new Error('Server error');
			}

			return await response.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const personalCarsListSlice = createSlice({
	name: NAME_SPACE,
	initialState: {
		list: [],
		loading: true,
		error: null
	},
	reducers: {
		clearList(state, action) {
			state.list = [];
			state.loading = true;
			state.error = null;
		}
	},
	extraReducers: {
		[fetchPersonalCarsList.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[fetchPersonalCarsList.fulfilled]: (state, action) => {
			state.loading = false;
			state.list = action.payload;
		},
		[fetchPersonalCarsList.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	}
});

export const getPersonalCarsListLoadingSelector = (state) => state.personalCars.loading;
export const getPersonalCarsListErrorSelector = (state) => state.personalCars.error;
export const getPersonalCarsListSelector = (state) => state.personalCars.list;

export const { clearList } = personalCarsListSlice.actions;

export default personalCarsListSlice.reducer;