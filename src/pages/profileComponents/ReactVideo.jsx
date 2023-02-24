import React from 'react';

function ReactVideo() {
	return (
		<>
			<iframe
				width='560'
				height='315'
				src='https://www.youtube.com/embed/QCkl9RMd5-s?start=21'
				title='YouTube video player'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowfullscreen
			></iframe>
		</>
	);
}

export default ReactVideo;
