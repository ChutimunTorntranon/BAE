import React from 'react';
import ModalImage from 'react-modal-image';
import { useTranslation } from 'react-i18next';
function ToolingComponent() {
	const { t, i18n } = useTranslation();
	const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem('lng', lng);
	};
	return (
		<div className='Box1 xl:mt-[20px] mt-[-1px]'>
			<div className='container mx-auto'>
				<div className='p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-center'>
					<strong>{t('ht')}</strong>
				</div>
				<ul className='list-disc p-3'>
					<li className='p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-left'>
						{t('ht1')}
						<li>{t('ht4')}</li>
						<li>{t('ht5')}</li>
						<li>{t('ht6')}</li>
						<li>{t('ht7')}</li>
						<li>{t('ht8')}</li>
						<li>{t('ht9')}</li>
						<li>{t('ht10')}</li>
					</li>
				</ul>
			</div>
			<div className='bg-gray-100'>
				<div className='container mx-auto'>
					<div className='grid 2xl:grid-cols-3 grid-col-1 p-5'>
						<ModalImage
							small={
								'https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P05.jpg'
							}
							large={
								'https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P05.jpg'
							}
							alt=''
							className='w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P02.jpg'
							}
							large={
								'https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P02.jpg'
							}
							alt=''
							className='w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P03.jpg'
							}
							large={
								'https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P03.jpg'
							}
							alt=''
							className='w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P06.jpg'
							}
							large={
								'https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P06.jpg'
							}
							alt=''
							className='w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P07.jpg'
							}
							large={
								'https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P07.jpg'
							}
							alt=''
							className='w-[400px] h-[300px] mx-auto hover:scale-125 ease-in duration-500 p-3'
						/>
						<ModalImage
							small={
								'https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P08.jpg'
							}
							large={
								'https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/image-brother/P08.jpg'
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

export default ToolingComponent;
