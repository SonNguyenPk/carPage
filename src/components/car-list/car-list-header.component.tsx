import { Select, Input, Button, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
const { Option } = Select;
const { Search } = Input;

const CarListHeader = () => {
	const [selectedValue, setSelectedValue] = useState('all');
	const handleChange = (value: string) => {
		setSelectedValue(value);
	};
	return (
		<Col xs={0} md={20}>
			<Select
				defaultValue={selectedValue}
				style={{
					width: 120,
				}}
				onChange={handleChange}>
				<Option value='all'>View All</Option>
				<Option value='update'>Last Updated</Option>
				<Option value='brand'>Brand Name</Option>
				<Option value='model'>Number of Models</Option>
			</Select>
			<Search placeholder='input search text' allowClear style={{ width: 200 }} />
			<Button type='primary' shape='round' icon={<PlusOutlined />} style={{ float: 'right' }}>
				Add Brand
			</Button>
		</Col>
	);
};

export default CarListHeader;
