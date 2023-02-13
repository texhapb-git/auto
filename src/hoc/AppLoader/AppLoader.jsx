import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Spinner } from '../../components/Spinner';

import localStorageService from '../../services/localStorage.service';

import { checkAuthUser } from '../../store/slices/authSlice';

const AppLoader = ({ children }) => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);
	const userId = localStorageService.getLocalId();

	useEffect(() => {

		setLoading(true);

		(async function () {
			try {
				if (!userId) {
					setLoading(false);
				}

				dispatch(checkAuthUser())
					.unwrap()
					.then(() => {
						setLoading(false);
					})
					.catch(e => {
						localStorageService.removeUserData();
						setLoading(false);
					});


			} catch (e) {
				toast(e.message, { type: 'error' });
			}
		})();

	}, [userId, dispatch]);

	if (loading) {
		return (
			<Spinner />
		);
	}

	return (
		<>{children}</>
	);

};

AppLoader.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};

export { AppLoader };