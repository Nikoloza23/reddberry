import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './thank.css';

function Thank() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/');
		},  10000 );
	}, [navigate]);

	return (
		<div className="back">
			<h1 className="thank_redberry">Thanks for Joining 😊</h1>
		</div>
	);
}

export default Thank;
