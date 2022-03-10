import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addSkill, deleteSkill } from '../../redux/action';
import { reduxSkills } from '../../redux/selectors';

import './page2.css';
import Pagination from '../../components/pagination/Pagination';

function Page2() {
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
		console.log('skills', data);

		dispatch(addSkill({ ...data }));
	};

	return (
		<div className="split_2">
			<div className="splitleft">
				<div className="centered">
					<h1 className="rocketer_2">Tell us about your skills</h1>
					<div className="form_container_2">
						<form id="technologyForm" onSubmit={handleSubmit(onFormSubmit)}>
							<div className="form_input_2">
								<select className="form-input_4" {...register('id', { required: true })}>
									<option defaultValue disabled>
										Skills
									</option>
									{skills &&
										skills.map((skill) => (
											<option className="skills" key={skill.id} value={skill.id}>
												{skill.title}
											</option>
										))}
								</select>
							</div>

							<div>
								<input
									className={errors.experience ? 'duration invalidInput' : 'duration'}
									type="number"
									min={0}
									id="experience"
									placeholder="Experience Duration in Years"
									{...register('experience', { required: true })}
								/>
								<div className="errors_3">
									{errors.experience?.type === 'required' && '* experience is required '}
								</div>
							</div>
							<button className="add_duration">Add Programming Language</button>
						</form>
					</div>

					{choosenSkills.map((skill) => (
						<div className="form_inputs" key={skill.id}>
							<div className="form-input_2">{skills && skills[skill.id - 1]?.title}</div>
							<div className="experience">Years of Experience {skill.experience}</div>
							<div className="remove" onClick={() => dispatch(deleteSkill(skill.id))}>
								-
							</div>
						</div>
					))}
					<Pagination choosenSkills={choosenSkills} />
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
