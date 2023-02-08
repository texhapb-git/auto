import { Navigate } from 'react-router-dom';

import { MainLayout } from '../layouts/MainLayout';
import { InnerLayout } from '../layouts/InnerLayout';
import { AuthLayout } from '../layouts/AuthLayout';

import { MainPage } from '../pages/MainPage';
import { CarsPage } from '../pages/CarsPage';
import { AboutPage } from '../pages/AboutPage';
import { FavouritesPage } from '../pages/FavouritesPage';
import { CarDetailPage } from '../pages/CarDetailPage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';


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
		path: 'auth',
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <Navigate to="/auth/login" />
			},
			{
				path: 'login',
				element: <LoginPage />
			},
			{
				path: 'signup',
				element: <SignupPage />
			},
			{
				path: '*',
				element: <Navigate to="/auth/login" />
			}
		]
	},
	{
		path: '*',
		element: <Navigate to="/" />
	}
];


export default routes;