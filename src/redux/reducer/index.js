import axios from 'axios';
import * as types from '../actiontypes';

const initialState = {
	identity: {},
	skills: [],
	covid: {},
	event: {},
	IndexSave: [],
};

const handleCart = (state = initialState, action) => {
	switch (action.type) {
		case types.addSkillType: {
			return {
				...state,
				skills: [...state.skills, action.payload],
			};
		}

		case types.deleteSkillType: {
			const skillIndex = state.skills.findIndex((skill) => skill.id === action.payload);
			return {
				...state,
				skills: [...state.skills.slice(0, skillIndex), ...state.skills.slice(skillIndex + 1)],
			};
		}
		case types.SAVE__INDEX: {
			return {
				...state,
				IndexSave: [...state.IndexSave, action.payload],
			};
		}
		case types.UPLOAD_DATA_TYPE: {
			axios.post(`https://bootcamp-2022.devtest.ge/api/application`, {
				token: '1ea61535-2d2c-4b72-a428-96f33e183acc',
				first_name: 'Nikoloz',
				last_name: 'Abashia',
				email: 'abashia.nikoloza@gmail.com',
				phone: '+995555928535',
				skills: [
					{
						skill: 'HTML',
						experience: '2',
					},
					{
						skill: 'CSS',
						experience: '2',
					},
					{
						skill: 'React.JS',
						experience: '1',
					},
				],
				work_preference: 'From Sairme Office',
				had_covid: true,
				had_covid_at: '2022-02-1',
				vaccinated: false,
				will_organize_devtalk: true,
				devtalk_topic: 'Interesting things. And whatever the team decides',
				something_special:
					"I'm  14 years old junior Front-end Developer.I wan…rking on various diverse and interesting projects",
			});
		}

		default:
			return state;
	}
};

export default handleCart;
