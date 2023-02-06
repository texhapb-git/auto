import { CarsList } from '../components/CarsList';

import { InnerLayout } from '../layouts/InnerLayout';

const CarsPage = () => {
	return (
		<InnerLayout>
			<CarsList type="list" />
		</InnerLayout>
	);
};

export { CarsPage };