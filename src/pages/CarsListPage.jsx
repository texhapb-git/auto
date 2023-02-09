import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { CarsList } from '../components/CarsList';
import { Spinner } from '../components/Spinner';

import { fetchCarsList, getCarsListSelector, getCarsListLoadingSelector, getCarsListErrorSelector } from '../store/slices/carsListSlice';

const CarsListPage = () => {
	const dispatch = useDispatch();

	const loading = useSelector(getCarsListLoadingSelector);
	const error = useSelector(getCarsListErrorSelector);
	const cars = useSelector(getCarsListSelector);

	useEffect(() => {
		const params = {
			'_limit': 20,
			'_sort': 'dateCreated',
			'_order': 'desc'
		};

		dispatch(fetchCarsList(params));
	}, [dispatch]);

	if (error) {
		toast(error, { type: 'error' });
	}

	return (
		<>
			<h1>Filter</h1>

			{!error ?
				<>
					{loading ?
						<Spinner />
						: <CarsList type="list" cars={cars} />
					}
				</>
				: null
			}


		</>

	);
};

export { CarsListPage };