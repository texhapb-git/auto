import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import usersService from '../../services/users.service';

const NAME_SPACE = 'auth';

const authSlice = createSlice({
	name: NAME_SPACE,
	initialState: {
		isAuth: false,
		authUserId: null
	},
	reducers: {

	},
	extraReducers: {

	}
});


export const isAuthSelector = (state) => state.auth.isAuth;
export const authUserSelector = (state) => state.auth.authUserId;

// export const {  } = authSlice.actions;

export default authSlice.reducer;