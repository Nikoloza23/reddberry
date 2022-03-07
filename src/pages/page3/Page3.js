import React, { useState } from 'react';
import Pagination from '../../components/pagination/Pagination';
import Date from './helpers/Date';
import './page3.css';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Covid from './helpers/Covid';

function Page3() {
	const [radio, setRadio] = useState();
	const [covid, setCovid] = useState();
	const [done, setDone] = useState();
	const [isToggled, setIsToggled] = useState(false);
	const [lastToggled, setLastToggled] = useState(false);
	const formRef = useRef();
	const navigate = useNavigate();

	const changeToggle = (x) => {
		setIsToggled(x);
	};

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onFormSubmit = (data) => {
		console.log(data);

		navigate('/fourthPage');
	};

	return (
		<div className="split_2">
			<div className="split left">
				<div className="all">
					<div className="centered">
						<h1 className="rocketer_3">Covid Stuff</h1>
					</div>
					<div>{(radio, covid, done)}</div>;
					<form onSubmit={handleSubmit(onFormSubmit)} ref={formRef} id="3">
						<div className="choosen_work">
							<div className="work">how would you prefer to work?</div>
						</div>
						<div className="topping">
							<input
								className="checkbox"
								type="radio"
								value="From Sairme Office"
								onChange={(e) => setRadio(e.target.value)}
								{...register('work_preference', { required: true })}
							/>
							<div className="change">From Sairme Office</div>
							<input
								className="checkbox"
								type="radio"
								value="From Home"
								onChange={(e) => setRadio(e.target.value)}
								{...register('work_preference', { required: true })}
							/>
							<div className="change">From Home </div>
							<input
								className="checkbox"
								type="radio"
								name="radio"
								value="Hybrid"
								{...register('work_preference', { required: true })}
							/>
							<div className="change">Hybrid</div>
							<div className="errors_2">
								{errors.work_preference?.type === 'required' && '* work type is required '}
							</div>
						</div>
						<div className="work_2">Did you contact covid 19? :(</div>
						<div className="topping">
							<button className="isTogled" onClick={() => changeToggle(true)}>
								<input
									className="checkbox_2"
									type="radio"
									value="true"
									onChange={(e) => setCovid(e.target.value)}
									{...register('had_covid', { required: true })}
								/>
							</button>
							<div>
								<button className="isTogled" onClick={() => changeToggle(false)}>
									<div className="change_2">Yes</div>
									<input
										className="checkbox_3"
										type="radio"
										value="false"
										onChange={(e) => setCovid(e.target.value)}
										{...register('had_covid', { required: true })}
									/>
								</button>
								<div className="change_2">No</div>
							</div>
							{isToggled && <Date />}
							{isToggled}
							<div className="errors_2">
								{errors.had_covid?.type === 'required' && '* covid form is required '}
							</div>
						</div>
						<div className="text">Have you been vaccinated?</div>
						<div className="topping">
							<button className="isTogled" onClick={() => setLastToggled(true)}>
								<input
									className="checkbox_2"
									type="radio"
									value="true"
									onChange={(e) => setDone(e.target.value)}
									{...register('vaqcine', { required: true })}
								/>
							</button>
							<div>
								<button className="lastTogled_2" onClick={() => setLastToggled(false)}>
									<div className="change_4">Yes</div>
									<input
										className="checkbox_4"
										type="radio"
										value="false"
										onChange={(e) => setDone(e.target.value)}
										{...register('vaqcine', { required: true })}
									/>
								</button>
								<div className="change_2">No</div>
								<div className="errors_2">
									{errors.vaqcine?.type === 'required' && '* vacinated form is required '}
								</div>
								<div className="lastToggled">{lastToggled && <Covid />}</div>
								{lastToggled}
							</div>
						</div>
					</form>
				</div>
				<Pagination formRef={formRef} />
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
