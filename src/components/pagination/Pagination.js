import React, { useState, useEffect } from 'react';
import './pagination.css';
import Next from '../../assets/Next.svg';
import Previous from '../../assets/Previous.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Routes from '../routes/Routes';

const Pagination = ({ formRef }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const [choosenPage, setChoosenPage] = useState(0);

	useEffect(() => {
		setChoosenPage(Routes.findIndex((route) => route === location.pathname));
	}, [location]);

	const onPrevious = () => {
		navigate(Routes[choosenPage - 1]);
	};

	const onNext = () => {
		if (!formRef) navigate(Routes[choosenPage + 1]);
	};
	return (
		<div>
			<div className="circle_container">
				<Link to="/firstPage" style={{ textDecoration: 'none', marginTop: '8px' }}>
					<span className="dot"></span>
				</Link>
				<Link to="/secondPage" style={{ textDecoration: 'none', marginTop: '8px' }}>
					<span className="dot"></span>
				</Link>
				<Link to="/thirdPage" style={{ textDecoration: 'none', marginTop: '8px' }}>
					<span className="dot"></span>
				</Link>
				<Link to="/fourthPage" style={{ textDecoration: 'none', marginTop: '8px' }}>
					<span className="dot"></span>
				</Link>
				<Link to="/submitPage" style={{ textDecoration: 'none', marginTop: '8px' }}>
					<span className="dot"></span>
				</Link>
				<div className="previouses">
					<div onClick={onPrevious}>
						<img className="left" src={Previous} alt="/" />
					</div>
					<div onClick={onNext} form={formRef}>
						<img className="right" src={Next} alt="/" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
