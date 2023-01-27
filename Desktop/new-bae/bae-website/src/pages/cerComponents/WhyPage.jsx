import React from 'react';

function WhyPage() {
	return (
		<div className='container mx-auto'>
			<div className='p-3 text-center'>ทำไมต้องคุณถึงต้องมาร่วมงานกับเรา?</div>
			<div className='grid xl:grid-cols-2'>
				<div>
					<img
						src='https://img.freepik.com/free-photo/businessmen-businesswomen-meeting-brainstorming-ideas_7861-3065.jpg?w=1800&t=st=1673947901~exp=1673948501~hmac=b9ba11acefffc18205419024bc873a2a83850eefd24c4590939f47fe9760c3c4'
						alt=''
					/>
				</div>
				<div className='my-auto'>
					<h1 className='p-3 text-center xl:text-left'>Creative Thinking</h1>
					<p className='p-3'>
						{' '}
						บริษัทฯ ได้จัดอบรมสัมนาหลักสูตร “Creative and Innovative Thinking”
						ให้กับพนักงานฝ่ายบริหาร
						ซึ่งเป็นหลักสูตรที่สอนเกี่ยวกับการคิดนอกกรอบอย่างสร้างสรรค์ เช่น
						เทคนิคการพัฒนาความคิดสร้างสรรค์
						วิธีการระดมสมองเพื่อให้ได้มาซึ่งความคิดสร้างสรรค์ การคิดเชิงบวก
						Growth Mindset และ “Play for Performance”
						ซึ่งเหมาะกับการพัฒนาบุคลากรให้กับทุกฝ่าย/แผนก
					</p>
				</div>
			</div>
			<div className='grid xl:grid-cols-2 mt-2'>
				<div>
					<img
						src='https://img.freepik.com/free-photo/teenager-dressed-white-t-shirt-using-virtual-reality-glasses-with-graph-charts-numbers-lines-technology-concept_613910-5097.jpg?w=2000&t=st=1674004347~exp=1674004947~hmac=7bdd9247630e88f741b264d4a25959b5ab08b80566a2c242532554b43875d305'
						alt=''
					/>
				</div>
				<div className='my-auto'>
					<h1 className='p-3 text-center xl:text-left'>New Technology</h1>
					<p className='p-3'>
						{' '}
						บริษัทรับผลิตงาน Spot Welding
						ในอุตสาหกรรมชิ้นส่วนยานยนต์โดยใช้เครื่องจักรที่ทันสมัยพร้อมบุคลากรที่มีความเชียวชาญภายใต้การรับรองมาตรฐาน
						IATF 16949
					</p>
				</div>
			</div>
			<div className='grid xl:grid-cols-2 mt-2'>
				<div>
					<img
						src='https://img.freepik.com/free-photo/group-happy-young-asia-business-coworkers-using-laptop-team-casual-meeting-startup-project-discussion-cafe-restaurant_7861-3035.jpg?w=1800&t=st=1674005065~exp=1674005665~hmac=ee0296d11118db14e6f998d13018ce9dd1eaeb5930bdc0d4df6d6caf98a4d7a0'
						alt=''
					></img>
				</div>
				<div className='my-auto'>
					<h1 className='p-3 text-center xl:text-left'>Monthly update</h1>
					<p className='p-3'>
						{' '}
						บริษัทฯ
						ได้จัดให้มีการอบรมพนักงานที่พัฒนาขึ้นโดยผู้สอนเป็นบุคคลภายในองค์กรที่มีความสามารถถ่ายทอดความรู้
						ซึ่งมีเป้าหมายเพื่อรักษามาตรฐานการทำงานและยกระดับความสามารถของบุคคลากรในองค์กรได้
					</p>
				</div>
			</div>
		</div>
	);
}

export default WhyPage;
