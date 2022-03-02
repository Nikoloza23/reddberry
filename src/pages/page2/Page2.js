import React from 'react';
import Pagination from '../../components/pagination/Pagination';
import './page2.css';

function Page2() {
	return (
		<div className="split_2">
			<div className="split left">
				<div className="centered">
					<h1 className="rocketer_2">Tell us about your skills</h1>
					<div className="form_container_2">
						<div className="form_input_2">
							<input className="form-input" type="text" name="username" placeholder="Skills" />
							<select className="selector">
								<option className="skills">React</option>
								<option className="skills">HtML</option>
								<option className="skills">CSS</option>
							</select>
						</div>
						<div className="form_input">
							<input
								className="form-input"
								type="text"
								name="username"
								placeholder="Experience Duration in Years"
							/>
						</div>
					</div>
					<div className="add_duration">Add Programming Language</div>
					<div></div>
					<div></div>
					<Pagination />
				</div>
				<div className="split right">
					<div className="centered">
						<h1 className="reddbery_origin_2">A bit about our battles</h1>
						<p className="content_2">
							As we said, Redberry has been on the field for quite some time now, and we have touched and
							embraced a variety of programming languages, technologies, philosophies, and frameworks. We
							are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with
							Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3
							industry.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page2;
