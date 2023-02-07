import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';
import { WorkArea } from '../components/WorkArea';

const InnerLayout = () => {
	return (
		<>
			<Header />
			<Main>
				<WorkArea>
					<Container>
						<Outlet />
					</Container>
				</WorkArea>
			</Main>
			<Footer />

		</>
	);
};

export { InnerLayout };