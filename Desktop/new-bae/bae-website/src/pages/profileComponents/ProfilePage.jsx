import React from 'react';

function ProfilePage() {
	return (
		<div className='mx-auto container p-3'>
			<div className='mx-auto container my-auto'>
				<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container mx-auto'>
					<div className='mx-auto my-auto '>
						<iframe
							className='w-[320px] h-[220px] mx-auto xl:w-[600px] xl:h-[400px]'
							src='https://www.youtube.com/embed/QCkl9RMd5-s'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen
						></iframe>
					</div>
					<div className='my-auto p-3'>
						<div className='p-5'>เกี่ยวกับเรา</div>
						<p className='p-3'>
							บริษัท ซิพ คือผู้เชี่ยวชาญ ในการผลิตงานด้านการชุบ และ การเคลือบผิว
							โดยการใช้สารเคมี เรามุ่งเน้นด้านคุณภาพแบะการบริการเพื่อลูกค้า
						</p>
						<p className='p-3'>“ ความพึงพอใจของคุณ คือความพึงพอใจของเรา ”</p>
						<button className='p-3'>อ่านเพิ่มเติม</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
