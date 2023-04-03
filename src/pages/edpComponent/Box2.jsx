import React from 'react';
import ModalImage from 'react-modal-image';
import '../lineComponent/LineStyle.css';
import { useTranslation } from 'react-i18next';
function Box2() {
	const { t, i18n } = useTranslation();
	const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem('lng', lng);
	};

	return (
		<div className='Box1 xl:mt-[20px] mt-[-1px]'>
			<div className='container mx-auto'>
				<div className='p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[23px] text-center xl:ml-8'>
					<strong>{t('edp1')}</strong>
				</div>
				<ul className='list-disc p-1 ml-5'>
					<div className='p-1 Font2 xl:text-[21px] xl:text-left text-[15px] text-left xl:ml-8'>
						<strong className='font-bold'>{t('edp2')}</strong>
						<br />
						&nbsp;{t('edp3')}
					</div>
					<div className='p-1 Font2 xl:text-[21px] xl:text-left text-[15px] text-left xl:ml-8'>
						<p className='font-black'>{t('edp4')}</p>
						<div className='ml-6'>
							<li>{t('edp5')}</li>
							<li>{t('edp6')}</li>
							<li>{t('edp7')}</li>
						</div>
					</div>
				</ul>
			</div>
			<div className='bg-gray-100'>
				<div className='container mx-auto'>
					<div className='grid xl:grid-cols-3 grid-cols-1 p-5'>
						<ModalImage
							small={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part+EDP/001.jpg'
							}
							large={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part+EDP/001.jpg'
							}
							alt=''
							className='w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part+EDP/002.jpg'
							}
							large={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part+EDP/002.jpg'
							}
							alt=''
							className='w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part+EDP/003.jpg'
							}
							large={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part+EDP/003.jpg'
							}
							alt=''
							className='w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part+EDP/004.jpg'
							}
							large={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part+EDP/004.jpg'
							}
							alt=''
							className='w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part+EDP/005.jpg'
							}
							large={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part+EDP/005.jpg'
							}
							alt=''
							className='w-[401px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part+EDP/006.jpg'
							}
							large={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part+EDP/006.jpg'
							}
							alt=''
							className='w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part+EDP/007.jpg'
							}
							large={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/part+EDP/007.jpg'
							}
							alt=''
							className='w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Box2;
