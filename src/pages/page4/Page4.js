import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '../../components/pagination/Pagination';
import './page4.css';

import { ADD_EVENT } from '../../redux/action';
import { event } from '../../redux/selectors';

//this is last page where you can introduce yourself
//and answer questions
function Page4() {
	const [talk, setTalk] = useState();
	const formRef = useRef();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const eventSelectors = useSelector(event);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onFormSubmit = (data) => {
		dispatch(ADD_EVENT(data));

		console.log(data);
		navigate('/submitPage');
	};

	return (
		<div className="split_2">
			<div className="split left">
				<div className="fourth">
					<div className="centered">
						<h1 className="rocketer_4">What about you?</h1>
						<div>{talk}</div>
					</div>
					<form onSubmit={handleSubmit(onFormSubmit)} ref={formRef} id="4">
						<div className="devtalks">
							<div className="devtalk">Would you attend Devtalks and maybe also organize your own?</div>
							<input
								className="checkbox"
								type="radio"
								value="true"
								defaultChecked={eventSelectors?.will_organize_devtalk === 'true'}
								onChange={(e) => setTalk(e.target.value)}
								{...register('will_organize_devtalk', { required: true })}
							/>
							<div className="devtalks_answer">Yes</div>
							<input
								className="checkbox"
								type="radio"
								value="false"
								defaultChecked={eventSelectors?.will_organize_devtalk === 'false'}
								onChange={(e) => setTalk(e.target.value)}
								{...register('will_organize_devtalk', { required: true })}
							/>
							<div className="devtalks_answer">No</div>
							<div className="errors_2">
								{errors.will_organize_devtalk?.type === 'required' && '* please select '}
							</div>
							<div className="about">What would you speak about at Devtalk?</div>
							<textarea
								className={errors.devtalk_topic ? 'txt invalidInput' : 'txt'}
								placeholder="I would..."
								defaultValue={eventSelectors?.devtalk_topic}
								{...register('devtalk_topic', { required: true })}
							></textarea>
							<div className="errors_2">
								{errors.devtalk_topic?.type === 'required' && '* please select '}
							</div>
							<div className="txt_2">Tell us something special</div>
							<textarea
								className={errors.something_special ? 'txt_3 invalidInput' : 'txt_3'}
								placeholder="I..."
								defaultValue={eventSelectors?.something_special}
								{...register('something_special', { required: true })}
							></textarea>
							<div className="errors_2">
								{errors.something_special?.type === 'required' && '* please select '}
							</div>
						</div>
					</form>
				</div>
				<Pagination formRef={formRef} />
			</div>
			<div className="split right">
				<div className="centered">
					<h1 className="reddbery_origin_4">Redberrian Insights</h1>
					<p className="content_4">
						We were soo much fun before the pandemic started! Parties almost every weekend and lavish
						employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost
						everything else in the world. But we try our best to zhuzh it up a bit. For example, we host
						biweekly Devtalks where our senior and lead developers talk about topics they are passionate
						about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks
						in the office but you can join our Zoom broadcast as well. Feel free to join either as an
						attendee or a speaker!
					</p>
				</div>
			</div>
		</div>
	);
}

export default Page4;
