import { Navigate } from 'react-router-dom';

import { MainPage } from '../pages/MainPage';
import { CarsPage } from '../pages/CarsPage';
import { AboutPage } from '../pages/AboutPage';
import { FavouritesPage } from '../pages/FavouritesPage';
import { CarDetailPage } from '../pages/CarDetailPage';
import { MainLayout } from '../layouts/MainLayout';
import { InnerLayout } from '../layouts/InnerLayout';


const routes = [
	{
		path: '',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <MainPage />
			}
		]
	},
	{
		path: 'about',
		element: <InnerLayout />,
		children: [
			{
				index: true,
				element: <AboutPage />
			}
		]
	},
	{
		path: 'cars',
		element: <InnerLayout />,
		children: [
			{
				index: true,
				element: <CarsPage />
			},
			{
				path: ':carId',
				element: <CarDetailPage />,
			}
		]
	},
	{
		path: 'favourites',
		element: <InnerLayout />,
		children: [
			{
				index: true,
				element: <FavouritesPage />
			}
		]
	},
	{
		path: '*',
		element: <Navigate to="/" />
	}
];


export default routes;