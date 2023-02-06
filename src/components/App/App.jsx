import { useRoutes } from 'react-router-dom';

import routes from '../../routes/routes';

import '../../styles/main.scss';


const App = () => {

	const appRoutes = useRoutes(routes);

	return (
		<>
			{appRoutes}
		</>
	);
};

export { App };
