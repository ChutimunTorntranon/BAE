import React from 'react';
import './Servicepage.css';
import { Link } from 'react-router-dom';
import '../../layoutComponent/Navbar.css';
import '../lineComponent/LineStyle.css';
import { useTranslation } from 'react-i18next';
function ServicePage() {
	const { t, i18n } = useTranslation();
	const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem('lng', lng);
	};

	return (
		<div className='container mx-auto my-5'>
			<div className='p-3 Font1 font-bold xl:text-[30px] xl:text-center text-[25px] text-center'>
				{t('ourservice')}
			</div>

			<div className='grid grid-cols-1 sm:mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto p-3'>
				<Link to='/Stamping&welding'>
					<div className='m-auto xl:w-[380px] xl:h-[470px] w-[350px] relative cursor-pointer'>
						<img
							src='https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/stamppppp.jpg'
							alt='Zinc'
							className='image__img'
						></img>
						<div className='image__overlay image__overlay--blur'>
							Stamp & welding
						</div>
						<div className='text-center Font1 p-1 underline hover:text-blue-600 duration-500'>
							{' '}
							Stamp & welding
						</div>
					</div>
				</Link>
				<Link to='/PlatingProduct'>
					<div className='m-auto relative xl:w-[380px] xl:h-[470px] w-[350px] cursor-pointer'>
						<img
							src='https://bae-image-video.s3.ap-southeast-1.amazonaws.com/LINE_ALBUM_2023.2.24_230224_21.jpg'
							alt='zinc'
							className='image__img'
						></img>
						<div className='image__overlay image__overlay--blur'>Plating</div>
						<div className='text-center Font1 p-1 underline hover:text-blue-600 duration-500'>
							Plating
						</div>
					</div>
				</Link>
				<Link to='/Tooling'>
					<div className='m-auto relative xl:w-[380px] xl:h-[470px] w-[350px] cursor-pointer'>
						<img
							src='https://bae-image-video.s3.ap-southeast-1.amazonaws.com/diee4.jpg'
							alt='edp'
							className='image__img'
						></img>
						<div className='image__overlay image__overlay--blur'>
							Tooling & Die
						</div>
						<div className='text-center Font1 p-1 underline hover:text-blue-600 duration-500'>
							Tooling & Die
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default ServicePage;
