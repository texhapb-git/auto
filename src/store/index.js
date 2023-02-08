import { configureStore } from '@reduxjs/toolkit';

import mobileMenuReducer from './slices/mobileMenuSlice';
import carsReducer from './slices/carsSlice';
import favouritesReducer from './slices/favouritesSlice';

export default configureStore({
	reducer: {
		mobileMenu: mobileMenuReducer,
		favourites: favouritesReducer,
		cars: carsReducer
	}
});