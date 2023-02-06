import PropTypes from 'prop-types';

import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';
import { WorkArea } from '../components/WorkArea';

const InnerLayout = ({ children }) => {
	return (
		<>
			<Header />
			<Main>
				<WorkArea>
					<Container>
						{children}
					</Container>
				</WorkArea>
			</Main>
			<Footer />

		</>
	);
};

InnerLayout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};

export { InnerLayout };