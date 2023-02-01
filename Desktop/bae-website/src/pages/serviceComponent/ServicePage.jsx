import React from 'react';
import './Servicepage.css';
import { Link } from 'react-router-dom';

function ServicePage() {
	return (
		<div className='container mx-auto'>
			<div className='container mx-auto xl:text-left text-center p-3'>
				OUR SERVICE
			</div>

			<div className='grid grid-cols-1 sm:mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto p-3'>
				<Link to='/Zinc'>
					<div className='image cursor-pointer'>
						<img
							src='https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Parts04.png'
							alt='zince'
							className='image__img'
						></img>
						<div className='image__overlay image__overlay--blur'>ZINC</div>
					</div>
				</Link>
				<Link to='/EDP'>
					<div className='image cursor-pointer'>
						<img
							src='https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/EDP-09.png'
							alt='zince'
							className='image__img'
						></img>
						<div className='image__overlay image__overlay--blur'>EDP</div>
					</div>
				</Link>
				<div className='image cursor-pointer'>
					<img
						src='https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Chromium1.jpg'
						alt='zince'
						className='image__img'
					></img>
					<div className='image__overlay image__overlay--blur'>CHROMIUM</div>
				</div>
			</div>
		</div>
	);
}

export default ServicePage;
