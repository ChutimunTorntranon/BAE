import React from 'react';
function NewPage() {
	return (
		<div className='container mx-auto p-3'>
			<div className=''>
				<h1 className='p-3'>ข่าวสารเกี่ยวกับเรา</h1>
			</div>

			<div class='p-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
				<img
					className='rounded-t-lg'
					src='https://img.freepik.com/free-photo/asian-colleague-male-female-friend-casual-dress-meeting-consult-work-together-with-fun-happiness-successful-brainstorm-workplace-business-partners-relation-ideas-concept_609648-2224.jpg?w=1800&t=st=1674782760~exp=1674783360~hmac=a36504d1397645012b16d102a08a20263bf67d0f122f2901c20bf48cca2bc57a'
					alt=''
				/>

				<div className='p-5'>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						Noteworthy technology acquisitions 2021
					</h5>

					<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
						Here are the biggest enterprise technology acquisitions of 2021 so
						far, in reverse chronological order.
					</p>
					<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
						10/1/2022
					</p>
					<button
						href='#'
						className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					>
						Read more
						<svg
							aria-hidden='true'
							class='w-4 h-4 ml-2 -mr-1'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
								clip-rule='evenodd'
							></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default NewPage;
