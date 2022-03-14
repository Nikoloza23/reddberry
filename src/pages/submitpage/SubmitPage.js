import { Link } from 'react-router-dom';
import './submitpage.css';

//here is submit page but
//still not working but you will see soon
//with funqtionality
function SubmitPage() {
	return (
		<div className="background_2">
			<Link to="/thanksPage" style={{ textDecoration: 'none' }}>
				<button className="submit">Submit</button>
			</Link>
			<Link to="/fourthPage" style={{ textDecoration: 'none' }}>
				<h1 className="go_back">go back</h1>
			</Link>
		</div>
	);
}

export default SubmitPage;
