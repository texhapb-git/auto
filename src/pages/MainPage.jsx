import { CarsList } from '../components/CarsList';
import { MainLayout } from '../layouts/MainLayout';

const MainPage = () => {
	return (
		<MainLayout>
			<CarsList type="flat" title="Последние объявления" />
		</MainLayout>
	);
};

export { MainPage };