import * as types from '../actiontypes';

const initialState = {
	identity: {},
	skills: [],
	covid: {},
	event: {},
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

		default:
			return state;
	}
};

export default handleCart;
