import React from 'react';
import { Link } from 'react-router-dom';
import './submitpage.css';

function SubmitPage() {
	return (
		<div className="background_2">
			<h1 className="submit">Submit</h1>
			<Link to="/firstPage" style={{ textDecoration: 'none' }}>
				<h1 className="go_back">go back</h1>
			</Link>
		</div>
	);
}

export default SubmitPage;
