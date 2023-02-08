import { configureStore } from '@reduxjs/toolkit';

import mobileMenuReducer from './slices/mobileMenuSlice';
// import favouritesReducer from './slices/favouritesSlice';
import carsListReducer from './slices/carsListSlice';
import carDetailReducer from './slices/carDetailSlice';
import lastCarsReducer from './slices/lastCarsSlice';

export default configureStore({
	reducer: {
		mobileMenu: mobileMenuReducer,
		// favourites: favouritesReducer,
		carsList: carsListReducer,
		carDetail: carDetailReducer,
		lastCars: lastCarsReducer
	}
});