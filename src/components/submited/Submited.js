import { useEffect, useState } from 'react';
import axios from 'axios';
import './submited.css';

function Submited() {
	const [ApiData, setApiData] = useState([]);
	const [apiSkills, setApiSkills] = useState([]);
	const [clickedData, setClickedData] = useState(null);

	useEffect(() => {
		axios
			.get(`https://bootcamp-2022.devtest.ge/api/applications?token=89nOpas%7Casdanjjh%5E%26as`)
			.then((result) => setApiData(result.data));

		axios.get(`https://bootcamp-2022.devtest.ge/api/skills`).then((result) => setApiSkills(result.data));
	}, []);

	const clickOnDataTitle = (num) => {
		setClickedData((prev) => (prev === num ? null : num));
	};

	console.log(ApiData.slice(0, 10));

	return (
		<div className="submited_list">
			<h1 className="applications">Submitted Applications</h1>

			{ApiData &&
				ApiData.slice(0, 10).map((submitedItem, index) => (
					<div key={Math.random()}>
						<button className="selected" onClick={() => clickOnDataTitle(index)}>
							{index}
						</button>
						<div className="all_list" style={clickedData === index ? {} : { display: 'none' }}>
							<div className="chooosen_data">
								<p className="choosen_info">
									Personal Inforamtion
									<div className="firs_page">First Name </div>
									<div className="firs_page">Last Name</div>
									<div className="firs_page">E mail</div>
									<div className="firs_page">Phone</div>
								</p>
								<div className="name_1">{submitedItem.first_name}</div>
								<div className="name_1">{submitedItem.last_name}</div>
								<div className="name_1">{submitedItem.email}</div>
								<div className="name_1">{submitedItem.phone}</div>
								<p className="choosen_info_2">
									Skills
									{submitedItem?.skills.map((skill) => (
										<div className="second_page_2">
											{apiSkills && apiSkills[skill.id - 1]?.title} Experience:
											{skill.experience}
										</div>
									))}
								</p>
								<p className="choosen_info_3">
									Covid Situation
									<div className="third_page_4">How Would You Prefer Work</div>
									<div className="third_page_3">
										<input type="radio" checked={submitedItem?.work_preference === 'from_office'} />
										From Sairme Office
									</div>
									<div className="third_page_3">
										<input type="radio" checked={submitedItem?.work_preference === 'from_home'} />
										Online
									</div>
									<div className="third_page_3">
										<input type="radio" checked={submitedItem?.work_preference === 'hybrid'} />
										Hybrid
									</div>
									<div className="third_page_4">
										Did you Have Covid 19?
										<div className="radios_4">
											<input type="radio" checked={submitedItem?.had_covid} />
											Yes
										</div>
										<input type="radio" checked={!submitedItem?.had_covid} />
										No
										<div className="third_page_5">When</div>
										<input type="date" defaultValue={submitedItem?.had_covid_at} readOnly />
									</div>
									<div className="third_page_4">
										Have you been vaccinated?
										<div className="radios_4">
											<input type="radio" checked={submitedItem?.vaccinated} />
											Yes
										</div>
										<input type="radio" checked={!submitedItem?.vaccinated} />
										No
									</div>
									<div className="third_page_6">When did you get vaccine?</div>
									<input type="date" defaultValue={submitedItem?.vaccinated_at} readOnly />
									<p className="choosen_info_5">Insigts</p>
									<div className="third_page_10">
										Would you attend Devtalks and maybe also organize your own?
										<div className="radios_4">
											<input type="radio" checked={submitedItem?.will_organize_devtalk} />
											Yes
										</div>
										<input type="radio" checked={!submitedItem?.will_organize_devtalk} />
										No
									</div>
									<div className="txt_4">What would you speak about at Devtalk?</div>
									<textarea
										className="txt_7"
										placeholder="I..."
										value={submitedItem?.devtalk_topic}
									/>
									<div className="txt_8">Tell us somthing special</div>
									<textarea
										className="txt_10"
										placeholder="I..."
										value={submitedItem?.something_special}
									/>
								</p>
							</div>
						</div>
					</div>
				))}
		</div>
	);
}

export default Submited;
