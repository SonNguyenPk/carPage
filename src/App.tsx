import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
//import './App.css';
import MainLayout from './components/main-layout/main-layout.component';
import CarList from './pages/car-list/car-list';
import Home from './pages/home/home';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='' element={<MainLayout />}>
					<Route path='/' element={<Home />}></Route>
					<Route path='/car-list' element={<CarList />}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
