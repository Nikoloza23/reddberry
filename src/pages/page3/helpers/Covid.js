import React from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './covid.css';

function Covid() {
	const formRef = useRef();
	const navigate = useNavigate();

	const {
		register,
		/* 		formState: { errors },
		 */ handleSubmit,
	} = useForm();

	const onFormSubmit = (data) => {
		console.log(data);

		navigate('/fourthPage');
	};
	return (
		<div>
			<form className="covid_3" onSubmit={handleSubmit(onFormSubmit)} ref={formRef} id="3">
				<div className="last">When did you get your last covid vaccine?</div>
				<input type="date" id="form-input_3" {...register('date', { required: true })} />
			</form>
		</div>
	);
}

export default Covid;
