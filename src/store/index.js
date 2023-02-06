import { configureStore } from '@reduxjs/toolkit';

import mobileMenuReducer from './slices/mobileMenuSlice';
import carsReducer from './slices/carsSlice';

export default configureStore({
	reducer: {
		mobileMenu: mobileMenuReducer,
		cars: carsReducer
	}
});