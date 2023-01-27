import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
	let Links = [
		{ name: 'หน้าหลัก', link: '/' },
		{ name: 'บริการของเรา', link: '/Service' },
		{ name: 'เกี่ยวกับเรา', link: '/' },
		{ name: 'ติดต่อเรา', link: '/' },
	];
	let [open, setOpen] = useState(false);
	return (
		<div className='shadow-md xl:max-w-full container fixed top-0 left-0 z-50 bg-gray-200'>
			<div className='md:flex items-center justify-between py-4 md:px-10 px-7 container mx-auto'>
				<div className='font-light xl:text-xl cursor-pointer flex items-center text-gray-[800] text-start text-[12px]'>
					<span className='text-3xl text-indigo-600 mr-1 pt-2'>
						<Link to='/'>
							<img
								src='https://baeimagevideo.s3.ap-southeast-1.amazonaws.com/Logobae.png'
								alt=''
								className='w-[80px] h-[80px] xl:w-[120px] xl:h-[120px] my-[-10px]'
							/>
						</Link>
					</span>
					BUNNAG INDUSTRIAL <br></br>TECHNOLOGIES AND SOFTWARE
				</div>
				<div
					onClick={() => setOpen(!open)}
					className='text-3xl absolute right-8 top-9 cursor-pointer md:hidden'
				>
					<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
				</div>
				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] 
					left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in bg-gray-200
					${open ? 'top-30 opacity-100' : 'top-[-490px]'} `}
				>
					{Links.map((link) => (
						<li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
							<a
								href={link.link}
								className='text-gray-800 hover:text-gray-400 duration-500'
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
