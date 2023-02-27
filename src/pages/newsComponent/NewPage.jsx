import React from 'react';
import './NewStyle.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
function NewPage() {
	const { t, i18n } = useTranslation();
	const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem('lng', lng);
	};
	return (
		<div className='container mx-auto p-3'>
			<div className=''>
				<h1 className='p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[25px] text-center'>
					{t('News')}
				</h1>
			</div>
			<Link to='https://bitsoft.app/'>
				<div class='p-3 max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl duration-300 ease-in 2xl:mx-0 mx-auto'>
					<img
						className='rounded-t-lg mx-auto'
						src='https://bae-image-video.s3.ap-southeast-1.amazonaws.com/presenter.jpg'
						alt=''
					/>

					<div className='p-5 fontNav'>
						<h5 className='p-1 Font1 font-bold xl:text-[30px] xl:text-center text-[17px] text-left'>
							SUISEI Production Control System
						</h5>

						<p className='p-1 Font2 xl:text-[21px] xl:text-left text-[15px] text-left'>
							{t('Tnews')}
						</p>
						<p className='p-1 Font2 xl:text-[21px] xl:text-left text-[15px] text-center'>
							10/1/2022
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default NewPage;
