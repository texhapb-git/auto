import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';

import mobileMenuReducer from './slices/mobileMenuSlice';
// import favouritesReducer from './slices/favouritesSlice';
import carsListReducer from './slices/carsListSlice';
import carDetailReducer from './slices/carDetailSlice';
import lastCarsReducer from './slices/lastCarsSlice';



export default configureStore({
	reducer: {
		auth: authReducer,

		mobileMenu: mobileMenuReducer,
		// favourites: favouritesReducer,

		carsList: carsListReducer,
		carDetail: carDetailReducer,
		lastCars: lastCarsReducer
	}
});