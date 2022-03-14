import * as types from '../actiontypes';
import axios from 'axios';

const initialState = {
	identity: {},
	skills: [],
	covid_list: {},
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
		case types.ADD_IDENTITY_TYPE: {
			return { ...state, identity: action.payload };
		}

		case types.ADD_COVID_TYPE: {
			return { ...state, covid_list: action.payload };
		}

		case types.ADD_EVENT_TYPE: {
			return { ...state, event: action.payload };
		}
		case types.UPLOAD_DATA_TYPE: {
			const redberry = `https://bootcamp-2022.devtest.ge/api/application`;
			axios({
				method: 'post',
				responseType: 'json',
				url: `${redberry}`,
				token: `76b7a03c-8b10-4447-8c24-985c5874adef`,
				data: {
					...state.identity,
					skills: state.skills,
					...state.covid_list,
					...state.event,
				},
			})
				.then((res) => console.log('server response', res))
				.catch((error) => console.log('server response', error));
			return {
				identity: {},
				skills: [],
				covid: {},
				event: {},
			};
		}
		default:
			return state;
	}
};

export default handleCart;
