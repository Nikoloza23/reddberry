import React from 'react';
import Pagination from '../../components/pagination/Pagination';
import './page1.css';

function Page1() {
	return (
		<div className="split_2">
			<div className="split left">
				<div className="centered">
					<h1 className="rocketer">Hey, Rocketeer, what are you coordinates?</h1>
				</div>
				<div className="form_container">
					<div className="form_input">
						<input className="form-input" type="text" name="username" placeholder="First Name" />
					</div>
					<div className="form_input">
						<input className="form-input" type="text" name="username" placeholder="Last Name" />
					</div>
					<div className="form_input">
						<input className="form-input" type="text" name="username" placeholder="E Mail" />
					</div>
					<div className="form_input">
						<input className="form-input" type="text" name="username" placeholder="+995 5__ __ __ __" />
					</div>
				</div>
				<Pagination />
			</div>
			<div className="split right">
				<div className="centered">
					<h1 className="reddbery_origins">Redbery Origins</h1>
					<p className="content">
						You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a
						question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga
						Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a
						yet to be born company was inspired - Redberry 😇
					</p>
				</div>
			</div>
		</div>
	);
}

export default Page1;
