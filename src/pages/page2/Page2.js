import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { addSkill, deleteSkill } from '../../redux/action';
import { reduxSkills } from '../../redux/selectors';

import './page2.css';
import Pagination from '../../components/pagination/Pagination';

function Page2() {
	const formRef = useRef();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const choosenSkills = useSelector(reduxSkills);
	const [skills, setSkills] = useState(null);

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		axios
			.get('https://bootcamp-2022.devtest.ge/api/skills')
			.then((res) => {
				setSkills(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const onFormSubmit = (data) => {
		console.log('technology data', data);

		dispatch(addSkill({ id: Math.random(), ...data }));
	};

	return (
		<div className="split_2">
			<div className="splitleft">
				<div className="centered">
					<h1 className="rocketer_2">Tell us about your skills</h1>
					<div className="form_container_2">
						<form id="technologyForm" onSubmit={handleSubmit(onFormSubmit)} ref={formRef}>
							<div className="form_input_2">
								<select className="form-input_4" {...register('skill', { required: true })}>
									<option defaultValue disabled>
										Skills
									</option>
									{skills &&
										skills.map((skill) => (
											<option className="skills" key={skill.id} value={skill.title}>
												{skill.title}
											</option>
										))}
								</select>
							</div>
							<div>
								<input
									className="duration"
									type="number"
									min={0}
									id="experience"
									placeholder="Experience Duration in Years"
									{...register('experience', { required: true })}
								/>
								<div className="errors_3">
									{errors.experience?.type === 'required' && '* please select '}
								</div>
							</div>
						</form>
						<button className="add_duration" form={formRef?.current?.id}>
							Add Programming Language
						</button>
					</div>

					{choosenSkills.map((skill) => (
						<div className="form_inputs" key={skill.id}>
							<div className="form-input_2">{skill.skill}</div>
							<div className="experience">Years of Experience {skill.experience}</div>
							<div className="remove" onClick={() => dispatch(deleteSkill(skill.id))}>
								-
							</div>
						</div>
					))}
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
