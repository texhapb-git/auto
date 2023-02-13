import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import usersService from '../../services/users.service';
import localStorageService from '../../services/localStorage.service';
import { prepareForDB } from '../../utils/user';

const NAME_SPACE = 'auth';

export const checkAuthUser = createAsyncThunk(
	`${NAME_SPACE}/checkAuthUser`,
	async function (_, { rejectWithValue, dispatch }) {
		const userId = localStorageService.getLocalId();

		try {
			if (!userId) {
				return;
			}

			const userResponse = await usersService.getUserById(userId);

			if (!userResponse.status === 200) {
				throw new Error('Server error');
			}

			const user = userResponse.data;
			return user;

		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const getAuthUserInfo = createAsyncThunk(
	`${NAME_SPACE}/getAuthUserInfo`,
	async function (_, { rejectWithValue, dispatch, getState }) {
		const userId = getState().auth.authUserId;

		try {
			const userResponse = await usersService.getUserById(userId);

			if (!userResponse.status === 200) {
				throw new Error('Server error');
			}

			const user = userResponse.data;
			return user;

		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const signInApp = createAsyncThunk(
	`${NAME_SPACE}/signInApp`,
	async function ({ email, password }, { rejectWithValue, dispatch }) {
		try {
			const userResponse = await usersService.fetch({ email: email.toLowerCase() });

			if (!userResponse.status === 200) {
				throw new Error('Server error');
			}

			if (!userResponse?.data?.length) {
				return rejectWithValue('Неправильный email или пароль');
			}

			const user = userResponse?.data[0];

			if (user.password !== password) {
				return rejectWithValue('Неправильный email или пароль');
			}

			const authData = {
				idToken: 'aaa',
				expiresIn: 'bbb',
				localId: user.id,
				refreshToken: 'sd',
				userId: user.id,
				userInfo: user
			};

			dispatch(signIn(authData));

		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const signUpApp = createAsyncThunk(
	`${NAME_SPACE}/signUpApp`,
	async function (userInfo, { rejectWithValue, dispatch }) {
		try {

			const existResponse = await usersService.fetch({ email: userInfo.email.toLowerCase() });

			if (!existResponse.status === 200) {
				throw new Error('Server error');
			}

			if (existResponse?.data?.length) {
				return rejectWithValue('Пользователь с таким email уже существует');
			}

			const userResponse = await usersService.createUser(prepareForDB(userInfo));

			if (!userResponse.status === 200) {
				throw new Error('Server error');
			}

			const user = userResponse.data;

			const authData = {
				idToken: 'aaa',
				expiresIn: 'bbb',
				localId: user.id,
				refreshToken: 'sd',
				userId: user.id,
				userInfo: user
			};

			dispatch(signIn(authData));

		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const authSlice = createSlice({
	name: NAME_SPACE,
	initialState: {
		isAuth: false,
		authUserId: null,
		authUserInfo: null,
		authError: null,
		registerError: null
	},
	reducers: {
		signIn(state, action) {
			localStorageService.setTokens(action.payload);
			state.isAuth = true;
			state.authUserId = action.payload.userId;
			state.authUserInfo = action.payload.userInfo;
		},
		signOut(state) {
			localStorageService.removeUserData();
			state.isAuth = false;
			state.authUserId = null;
			state.authUserInfo = null;
		}
	},
	extraReducers: {
		[checkAuthUser.pending]: (state, action) => {
			state.authError = null;
		},
		[checkAuthUser.fulfilled]: (state, action) => {
			state.isAuth = true;
			state.authUserId = action.payload.id;
			state.authUserInfo = action.payload;
		},
		[checkAuthUser.rejected]: (state, action) => {
			state.authError = action.payload;
		},
		[signInApp.pending]: (state, action) => {
			state.authError = null;
		},
		[signInApp.rejected]: (state, action) => {
			state.authError = action.payload;
		},
		[signUpApp.pending]: (state, action) => {
			state.registerError = null;
		},
		[signUpApp.rejected]: (state, action) => {
			state.registerError = action.payload;
		},
		[getAuthUserInfo.fulfilled]: (state, action) => {
			state.authUserInfo = action.payload;
		}

	}
});


export const isAuthSelector = (state) => state.auth.isAuth;
export const authUserIdSelector = (state) => state.auth.authUserId;
export const authUserInfoSelector = (state) => state.auth.authUserInfo;
export const authErrorSelector = (state) => state.auth.authError;
export const registerErrorSelector = (state) => state.auth.registerError;

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;