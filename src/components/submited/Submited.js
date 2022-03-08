import React from 'react';
import './submited.css';

function Submited() {
	return (
		<div className="submited_list">
			<h1 className="applications">Submitted Applications</h1>
			<select className="selected">
				<option defaultValue disabled>
					1
				</option>
				<option className="choosen_data">Data</option>
				<option className="choosen_data">Data</option>
				<option className="choosen_data">Data</option>
				<option className="choosen_data">Data</option>
			</select>
		</div>
	);
}

export default Submited;
