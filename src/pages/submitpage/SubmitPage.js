import { Link } from 'react-router-dom';
import './submitpage.css';
import { useDispatch } from 'react-redux';
import { UPLOAD_DATA } from '../../redux/actiontypes';

function SubmitPage() {
	/* 	const dispatch = useDispatch();

	const onSubmitClick = () => {
		dispatch(UPLOAD_DATA());
	}; */

	return (
		<div className="background_2">
			<Link to="/thanksPage" style={{ textDecoration: 'none' }}>
				<button className="submit" /* onClick={onSubmitClick} */>Submit</button>
			</Link>
			<Link to="/fourthPage" style={{ textDecoration: 'none' }}>
				<h1 className="go_back">go back</h1>
			</Link>
		</div>
	);
}

export default SubmitPage;
