import './pagination.css';
import Next from '../../assets/Next.svg';
import Previous from '../../assets/Previous.svg';
import { Link } from 'react-router-dom';

const Pagination = () => {
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
				<span className="dot"></span>
			</div>
			<div className="previouses">
				<div>
					<img className="left" src={Previous} alt="/" />
				</div>
				<div>
					<img className="right" src={Next} alt="/" />{' '}
				</div>
			</div>
		</div>
	);
};

export default Pagination;
