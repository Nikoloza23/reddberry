import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './thank.css';

//thanks page for answer questions
function Thank() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/');
		}, 3000);
	}, [navigate]);

	return (
		<div className="back">
			<h1 className="thank_redberry">Thanks for Joining 😊</h1>
		</div>
	);
}

export default Thank;
