import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	CalendarOutlined,
	UserOutlined,
	FolderOutlined,
	CarOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import React, { useState } from 'react';
import './main-layout.css';
import { Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem('CarBrand', '1', <CarOutlined />),
	getItem('Folder', '2', <FolderOutlined />, [
		getItem('Menu Item', '3'),
		getItem('Menu Item', '4'),
		getItem('Menu Item', '5'),
		getItem('Menu Item', '6'),
	]),
	getItem('Tasks', '7', <CalendarOutlined />),
	getItem('Modules', '8', <CalendarOutlined />),
	getItem('Notification', '9', <CalendarOutlined />),
];
const MainLayout = () => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<Layout>
			<Sider collapsible collapsed={collapsed}>
				<div className='logo' />
				<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']} items={items} />
			</Sider>
			<Layout className='site-layout'>
				<Header
					className='site-layout-background'
					style={{
						padding: 0,
					}}>
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
						className: 'trigger',
						onClick: () => setCollapsed(!collapsed),
					})}
				</Header>
				<Content
					className='site-layout-background'
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: '84vh',
					}}>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default MainLayout;
