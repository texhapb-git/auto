import { Navigate, Outlet } from 'react-router-dom';

import { MainPage } from '../pages/MainPage';
import { CarsPage } from '../pages/CarsPage';
import { AboutPage } from '../pages/AboutPage';



const routes = [
	{
		path: '',
		element: <MainPage />
	},
	{
		path: 'about',
		element: <AboutPage />
	},
	{
		path: 'cars',
		element: <CarsPage />,
		children: [
			{
				index: true,
				element: <CarsPage />
			},
			{
				path: ':carId',
				element: <Outlet />,
			}
		]
	},
	{
		path: '*',
		element: <Navigate to="/" />
	}
];


export default routes;