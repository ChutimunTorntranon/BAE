import React from 'react';
import './LineStyle.css';
import { useTranslation } from 'react-i18next';
function LinePage() {
	const { t, i18n } = useTranslation();
	const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem('lng', lng);
	};
	return (
		<div className='mx-auto p-5'>
			<div className='grid xl:grid-cols-4 grid-cols-1'>
				<div>
					<iframe
						className='rounded-3xl my-10 mx-auto xl:w-[450px]'
						width='350'
						height='255'
						src='https://www.youtube.com/embed/IsCIYc38-WQ'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowfullscreen
					></iframe>

					<div>
						<div className='p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[25px] text-center'>
							Stamping
						</div>
						<div className='p-3 Font2 xl:text-[22px] xl:text-left text-[15px] text-center'>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('stamping')}
						</div>
					</div>
				</div>
				<div>
					<iframe
						className='rounded-3xl my-10 mx-auto xl:w-[450px]'
						width='350'
						height='255'
						src='https://www.youtube.com/embed/yRI3iiSgd6U'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowfullscreen
					></iframe>
					<div>
						<div className='p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[25px] text-center'>
							Spot welding
						</div>
						<div className='p-3 Font2 xl:text-[21px] xl:text-left text-[15px] text-center'>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('spot')}
						</div>
					</div>
				</div>
				<div>
					<iframe
						className='rounded-3xl my-10 mx-auto xl:w-[450px]'
						width='350'
						height='255'
						src='https://www.youtube.com/embed/qPBHDenv5ug'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowfullscreen
					></iframe>

					<div>
						<div className='p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[25px] text-center'>
							Arc welding
						</div>
						<div className='p-3 Font2 xl:text-[22px] xl:text-left text-[15px] text-center'>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {t('arc')}
						</div>
					</div>
				</div>
				<div>
					<iframe
						className='rounded-3xl my-10 mx-auto xl:w-[450px]'
						width='350'
						height='255'
						src='https://www.youtube.com/embed/qfu7xhgeOUA'
						title='YouTube video player'
						frameborder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowfullscreen
					></iframe>

					<div>
						<div className='p-3 Font1 font-bold xl:text-[30px] xl:text-left text-[25px] text-center'>
							tooling
						</div>
						<div className='p-3 Font2 xl:text-[22px] xl:text-left text-[15px] text-center'>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {t('tool')}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LinePage;
