import React from 'react';
import './background.css';
import stars from '../../assets/stars.svg';
import rocketman from '../../assets/rocketman.svg';
import { Link } from 'react-router-dom';

function Background() {
	return (
		<div className="background">
			<div className="stars">
				<img src={stars} alt="/" />
			</div>
			<div className="components">
				<div className="title">Welcome Rocketeer!</div>
				<Link to="/firstPage" style={{ textDecoration: 'none' }}>
					<div className="start">Start Questionarie</div>
				</Link>
				<div className="submited">
					<Link to="/submited" style={{ textDecoration: 'none' }}>
						<div className="sub">Submited Applications</div>
					</Link>
				</div>
				<div>
					<img className="rocket" src={rocketman} alt="/" />
				</div>
			</div>
		</div>
	);
}

export default Background;
