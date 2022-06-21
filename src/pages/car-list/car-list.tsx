import { Col, Row } from 'antd';
import CarListHeader from '../../components/car-list/car-list-header.component';

const CarList = () => {
	return (
		<>
			<Row
				style={{
					display: 'flex',
					flexFlow: 'row-nowrap',
					width: '100%',
					justifyContent: 'space-between',
				}}>
				<Col xs={24} md={4}>
					<h3>Car Brand List</h3>
				</Col>
				<CarListHeader />
			</Row>
		</>
	);
};
export default CarList;
