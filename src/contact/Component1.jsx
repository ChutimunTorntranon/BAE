import React from 'react';
import './text.css';
import { useTranslation } from 'react-i18next';
function Component1() {
	const { t, i18n } = useTranslation();
	const handleChangeLng = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem('lng', lng);
	};
	return (
		<div className='2xl:mt-0 mt-5'>
			<div className='text-center text-[20px] Font1'>{t('map1')}</div>
			<iframe
				title='Ramintra Plant'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61990.48371482105!2d100.67246615495787!3d13.81468851843776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6380e6979c23%3A0x1d05a92d5eb2c5dc!2z4Lia4LiI4LiBLiDguJrguKPguLLguYDguJTguK3guKPguYwg4Lit4Lit4LmC4LiV4LmJ4Lie4Liy4Lij4LmM4LiX4Liq4LmMIOC5geC4reC4meC4lOC5jCDguYDguK3guYfguJnguIjguLTguYDguJnguLXguKLguKPguLTguYjguIc!5e0!3m2!1sth!2sth!4v1675823767640!5m2!1sth!2sth'
				className='shadow-2xl 2xl:w-[600px] 2xl:h-[600px] w-[300px] h-[300px]'
				style={{ border: 0, margin: 20 }}
				allowFullScreen=''
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
		</div>
	);
}

export default Component1;
