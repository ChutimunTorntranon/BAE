import React from 'react';
import BasicSlider from '../pages/BasicSlider/BasicSlider';
import ServicePage from './serviceComponent/ServicePage';
import ProfilePage from './profileComponents/ProfilePage';
import CerPage from './cerComponents/CerPage';
import WhyPage from './cerComponents/WhyPage';
import NewPage from './newsComponent/NewPage';
import Footer from '../footer/Footer';
import GoToTop from '../component/GoToTop';
// import ProductPage from './ProductPage';
function PostPage() {
	return (
		<div>
			<BasicSlider />
			<ServicePage />
			{/* <ProductPage /> */}
			<ProfilePage />
			<CerPage />
			<WhyPage />
			<NewPage />
			<Footer />
			<GoToTop />
		</div>
	);
}

export default PostPage;
