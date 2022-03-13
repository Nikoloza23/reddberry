import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './pagination.css';
import Routes from '../routes/Routes';
import { SaveIndex } from '../../redux/action/index';
import Next from '../../assets/Next.svg';
import Previous from '../../assets/Previous.svg';

//may this is priority page because
//with this funqcionally you can go-back on pages
//will show you which page you are on now
const Pagination = ({ formRef, choosenSkills }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const location = useLocation();

	const [choosenPage, setChoosenPage] = useState(0);
	const ActivIndex = useSelector((state) => state.IndexSave);

	useEffect(() => {
		setChoosenPage(Routes.findIndex((route) => route === location.pathname));
	}, [location]);

	const onPrevious = () => {
		navigate(Routes[choosenPage - 1]);
	};

	const onNext = () => {
		if (!formRef && choosenSkills.length !== 0) navigate(Routes[choosenPage + 1]);
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

	const Active = Pages.findIndex((el) => el.path === pathname);

	useEffect(() => {
		dispatch(SaveIndex(Active));
	}, [dispatch, Active]);

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
