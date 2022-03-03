import React from 'react';
import Background from '../components/background/Background';
import StarfieldAnimation from 'react-starfield-animation';

function Home() {
	return (
		<div>
			<StarfieldAnimation
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
				}}
			/>
			<Background />
		</div>
	);
}

export default Home;
