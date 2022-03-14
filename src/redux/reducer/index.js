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
		default:
			return state;
	}
};

export default handleCart;
