import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../layoutComponent/Navbar';
import PostPage from '../pages/PostPage';
import ZinceProduct from '../pages/zincePage/ZinceProduct';
import ProductPage from '../pages/productPage/ProductPage';
import EdpPage from '../pages/edpComponent/EdpPage';
import ChromiumPage from '../pages/chromiumPage/ChromiumPage';

function Router() {
	return (
		<>
			<Navbar />
			<Routes>
				<>
					<Route path='/' element={<PostPage />} />
					<Route path='/Service' element={<ProductPage />} />
					<Route path='/Zinc' element={<ZinceProduct />} />
					<Route path='/Edp' element={<EdpPage />} />
					<Route path='/Chromium' element={<ChromiumPage />} />
				</>
			</Routes>
		</>
	);
}

export default Router;
