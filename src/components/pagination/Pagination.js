import React, { useState, useEffect } from 'react';
import './pagination.css';
import Next from '../../assets/Next.svg';
import Previous from '../../assets/Previous.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Routes from '../routes/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { SaveIndex } from '../../redux/action/index';

const Pagination = ({ formRef }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = useLocation();
	const [choosenPage, setChoosenPage] = useState(0);
	const dispatch = useDispatch();
	const ActivIndex = useSelector((state) => state.IndexSave);

	useEffect(() => {
		setChoosenPage(Routes.findIndex((route) => route === location.pathname));
	}, [location]);

	const onPrevious = () => {
		navigate(Routes[choosenPage - 1]);
	};

	const onNext = () => {
		if (!formRef) navigate(Routes[choosenPage + 1]);
	};

	const Pages = [
		{
			path: '/firstPage',
		},
		{
			path: '/secondPage',
		},
		{
			path: '/thirdPage',
		},
		{
			path: '/fourthPage',
		},
		{
			path: '/submitPage',
		},
	];

	useEffect(() => {
		const Active = Pages.findIndex((el) => el.path === pathname);
		dispatch(SaveIndex(Active));
	}, []);

	return (
		<div className="circle_container">
			{Pages.map((el, i) => {
				return (
					<div key={i} className={i === ActivIndex[i] ? 'Active' : ''}>
						<Link to={el.path} className={'Eventnone'} onClick={(e) => e.preventDefault()}>
							<span className="dot"></span>
						</Link>
					</div>
				);
			})}
			<div className="previouses">
				<div onClick={onPrevious}>
					<img className="left" src={Previous} alt="/" />
				</div>
				<button className="button-right" onClick={onNext} form={formRef?.current?.id}>
					<img className="right" src={Next} alt="/" />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
