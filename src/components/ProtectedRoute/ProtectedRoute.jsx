import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
	const location = useLocation();

	const loggedIn = false;

	if (!loggedIn) {
		return <Navigate to="/auth/login" state={{ referref: location }} />;
	}

	return children;
};

ProtectedRoute.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};

export { ProtectedRoute };