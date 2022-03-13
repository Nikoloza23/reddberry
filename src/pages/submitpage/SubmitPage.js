import Axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './submitpage.css';

function SubmitPage() {
	const [data, setData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		phone: '',
	});

	const url = 'https://bootcamp-2022.devtest.ge/api/application';

	function handle(e) {
		const newdata = { ...data };
		newdata[e.target.id] = e.target.value;
		setData(newdata);
		console.log(newdata);
	}

	function submit(e) {
		e.preventDefault();
		Axios.post(url, {
			first_name: data.first_name,
			last_name: data.last_name,
			email: data.email,
			phone: data.phone,
		}).then((res) => {
			console.log(res.data);
		});
	}
	return (
		<form onSubmit={(e) => submit(e)}>
			<div className="background_2">
				<Link to="/thanksPage" style={{ textDecoration: 'none' }}>
					<button className="submit" onClick={(e) => handle(e)}>
						Submit
					</button>
				</Link>
				<Link to="/fourthPage" style={{ textDecoration: 'none' }}>
					<h1 className="go_back">go back</h1>
				</Link>
			</div>
		</form>
	);
}

export default SubmitPage;
