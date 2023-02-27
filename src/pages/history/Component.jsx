import React from 'react';
import '../lineComponent/LineStyle.css';
import { useTranslation } from 'react-i18next';
import Slider from './Slider';
function Component() {
	const { t, i18n } = useTranslation();
	const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem('lng', lng);
	};

	return (
		<div className='container mx-auto'>
			<div className='grid xl:grid-cols-2 grid-cols-1'>
				<div className='p-5 xl:my-20 my-4 mx-auto xl:mx-0'>
					<Slider />
				</div>
				<div className='p-2 grid'>
					<div className='xl:my-20 p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-center'>
						<p className='p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[25px] text-center'>
							{t('heading')}
						</p>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						{t('h3')}
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {t('h4')}
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						{t('h5')}
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {t('h6')}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Component;
