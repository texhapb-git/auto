import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { CarDetail } from '../components/CarDetail';
import { Spinner } from '../components/Spinner';

import { fetchCar, getCarDetail, getCarDetailLoading, getCarDetailError } from '../store/slices/carDetailSlice';

// import cars from '../db/cars.json';

const CarDetailPage = () => {
	const dispatch = useDispatch();

	const { carId } = useParams();

	const loading = useSelector(getCarDetailLoading);
	const error = useSelector(getCarDetailError);
	const car = useSelector(getCarDetail);

	useEffect(() => {
		dispatch(fetchCar(carId));
	}, [carId, dispatch]);

	if (error) {
		toast(error, { type: 'error' });
	}

	return (
		<>
			{!error ?
				<>
					{loading ?
						<Spinner />
						: <CarDetail car={car} />
					}
				</>
				: null
			}
		</>
	);
};

export { CarDetailPage };