import React, { useState } from 'react';
import Pagination from '../../components/pagination/Pagination';
import './page3.css';

function Page3() {
	const [radio, setRadio] = useState();
	const [covid, setCovid] = useState();
	const [done, setDone] = useState();

	return (
		<div className="split_2">
			<div className="split left">
				<div className="centered">
					<h1 className="rocketer_3">Covid Stuff</h1>
				</div>
				<div className="all">
					<div className="choosen_work">
						<div className="work">how would you prefer to work?</div>
					</div>
					<div className="topping">
						<input
							className="checkbox"
							type="radio"
							name="radio"
							value="From Sairme Office"
							onChange={(e) => setRadio(e.target.value)}
						/>
						<div className="change">From Sairme Office</div>
						<input
							className="checkbox"
							type="radio"
							name="radio"
							value="From Home"
							onChange={(e) => setRadio(e.target.value)}
						/>
						<div className="change">From Home </div>
						<input className="checkbox" type="radio" name="radio" value="Hybrid" />
						<div className="change">Hybrid</div>
					</div>
					<div className="work_2">Did you contact covid 19? :(</div>
					<div className="topping">
						<input
							className="checkbox"
							type="radio"
							name="covid"
							value="Yes"
							onChange={(e) => setCovid(e.target.value)}
						/>
						<div className="change">Yes</div>
						<input
							className="checkbox"
							type="radio"
							name="covid"
							value="No"
							onChange={(e) => setCovid(e.target.value)}
						/>
						<div className="change">No</div>
					</div>
					<div className="when">When?</div>
					<div className="form_input">
						<input className="form-input_3" type="text" placeholder="Done" />
					</div>
					<div className="text">Have you been vaccinated?</div>
					<input
						className="checkbox"
						type="radio"
						name="done"
						value="Yes"
						onChange={(e) => setDone(e.target.value)}
					/>
					<div className="change">Yes</div>
					<input
						className="checkbox"
						type="radio"
						name="done"
						value="No"
						onChange={(e) => setDone(e.target.value)}
					/>
					<div className="change">No</div>
					<div className="last">When did you get your last covid vaccine?</div>
					<div className="form_input">
						<input className="form-input_3" type="text" placeholder="Done" />
					</div>
					<Pagination />
				</div>
			</div>
			<div className="split right">
				<div className="centered">
					<h1 className="reddbery_origin_3">Redberry Covid Policies</h1>
					<p className="content_3">
						As this infamous pandemic took over the world, we adjusted our working practices so that our
						employees can be as safe and comfortable as possible. We have a hybrid work environment, so you
						can either work from home or visit our lovely office on Sairme Street. If it was up to us, we
						would love you to see us in the office because we think face-to-face communications Zoom
						meetings. Both on the fun and productivity scales.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Page3;
