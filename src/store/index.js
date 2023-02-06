import { configureStore } from '@reduxjs/toolkit';

import mobileMenuReducer from '../store/mobileMenuSlice';

export default configureStore({
	reducer: {
		mobileMenu: mobileMenuReducer
	}
});