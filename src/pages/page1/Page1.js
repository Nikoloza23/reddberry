import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';
import './page1.css';

function Page1() {
	const formRef = useRef();
	const navigate = useNavigate();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onFormSubmit = (data) => {
		console.log(data);

		navigate('/secondPage');
	};

	return (
		<div className="split_2">
			<div className="split left">
				<div className="centered">
					<h1 className="rocketer">Hey, Rocketeer, what are you coordinates?</h1>
				</div>
				<form className="form" onSubmit={handleSubmit(onFormSubmit)} ref={formRef} id="1">
					<div className="form_container">
						<div className="form_input">
							<input
								className="form-input"
								type="text"
								id="fname"
								name="fname"
								placeholder="First Name"
								{...register('firstName', { required: true, minLength: 2 })}
							/>
							<div className="errors">
								{errors.firstName?.type === 'required' && '* first name is required'}
								{errors.firstName?.type === 'minLength' && '*min 2 symbol'}
							</div>
						</div>
						<div className="form_input">
							<input
								className="form-input"
								type="text"
								id="lname"
								name="lname"
								placeholder="Last Name"
								{...register('lastName', { required: true })}
							/>
							<div className="errors">
								{errors.lastName?.type === 'required' && '* last name is required'}
								{errors.lastName?.type === 'minLength' &&
									'* last name should include 3 or more characters'}
							</div>
						</div>
						<div className="form_input">
							<input
								className="form-input"
								type="email"
								id="email"
								name="email"
								placeholder="E Mail"
								{...register('email', { required: true })}
							/>
							<div className="errors">
								{errors.email?.type === 'required' && '* email is required'}
								{errors.email?.type === 'email' && '*  email should include to meet the mail format '}
							</div>
						</div>
						<div className="form_input">
							<input
								className="form-input"
								type="tel"
								id="phone"
								name="phone"
								placeholder="+995 5__ __ __ __"
								{...register('mobileNumber', { required: true, pattern: /^\+[0-9]{3}[0-9]{9}/g })}
							/>
							<div className="errors">
								{errors.mobileNumber?.type === 'required' && '* mobileNumber is required'}
								{errors.mobileNumber?.type === 'pattern' && '* mobileNumber is include Geo format'}
							</div>
						</div>
					</div>
				</form>
				<Pagination formRef={formRef} />
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
