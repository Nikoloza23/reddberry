import { Link } from 'react-router-dom';
import './submitpage.css';

//here is submit page but
//still not working but you will see this
//with funqtionality
function SubmitPage() {
	return (
		<form onSubmit={(e) => submit(e)}>
			<div className="background_2">
				<Link to="/thanksPage" style={{ textDecoration: 'none' }}>
					<button className="submit">Submit</button>
				</Link>
				<Link to="/fourthPage" style={{ textDecoration: 'none' }}>
					<h1 className="go_back">go back</h1>
				</Link>
			</div>
		</form>
	);
}

export default SubmitPage;
