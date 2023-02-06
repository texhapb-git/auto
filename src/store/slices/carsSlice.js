import { createSlice } from '@reduxjs/toolkit';

const NAME_SPACE = 'cars';

const carsSlice = createSlice({
	name: NAME_SPACE,
	initialState: {
		cars: [],
		loading: false,
		error: null
	},
	reducers: {
		setCars(state, action) {
			state.loading = !state.loading;
		}
	}
});

export const { setCars } = carsSlice.actions;

export default carsSlice.reducer;