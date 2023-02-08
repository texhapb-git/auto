import { useRoutes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import routes from '../../routes/routes';

import 'react-toastify/dist/ReactToastify.css';
import '../../styles/main.scss';


const App = () => {

	const appRoutes = useRoutes(routes);

	return (
		<>
			{appRoutes}

			<ToastContainer />
		</>
	);
};

export { App };
