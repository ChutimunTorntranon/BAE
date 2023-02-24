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
				<div className='p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[23px] text-center'>
					<strong>{t('edp1')}</strong>
				</div>
				<ul className='list-disc p-5'>
					<li className='p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-left'>
						<strong>{t('edp2')}</strong>
						&nbsp;{t('edp3')}
					</li>
					<li className='p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-left'>
						<strong>{t('edp4')}</strong>
						<br></br>
						{t('edp5')}
						<br></br>
						{t('edp6')}
						<br></br>
						{t('edp7')}
					</li>
				</ul>
			</div>
			<div className='bg-gray-100'>
				<div className='container mx-auto'>
					<div className='grid xl:grid-cols-3 grid-cols-1 p-5'>
						<ModalImage
							small={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/LINE_ALBUM_2023.2.24_230224_9.jpg'
							}
							large={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/LINE_ALBUM_2023.2.24_230224_9.jpg'
							}
							alt=''
							className='w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/LINE_ALBUM_2023.2.24_230224_7.jpg'
							}
							large={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/LINE_ALBUM_2023.2.24_230224_7.jpg'
							}
							alt=''
							className='w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/LINE_ALBUM_2023.2.24_230224_5.jpg'
							}
							large={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/LINE_ALBUM_2023.2.24_230224_5.jpg'
							}
							alt=''
							className='w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/LINE_ALBUM_2023.2.24_230224_4.jpg'
							}
							large={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/LINE_ALBUM_2023.2.24_230224_4.jpg'
							}
							alt=''
							className='w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/LINE_ALBUM_2023.2.24_230224_3.jpg'
							}
							large={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/LINE_ALBUM_2023.2.24_230224_3.jpg'
							}
							alt=''
							className='w-[401px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/LINE_ALBUM_2023.2.24_230224_6.jpg'
							}
							large={
								'https://bae-image-video.s3.ap-southeast-1.amazonaws.com/LINE_ALBUM_2023.2.24_230224_6.jpg'
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
