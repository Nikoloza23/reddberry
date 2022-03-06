import * as types from '../actiontypes';

export const addSkill = (data) => {
	return {
		type: types.addSkillType,
		payload: data,
	};
};

export const deleteSkill = (skill) => {
	return {
		type: types.deleteSkillType,
		payload: skill,
	};
};

export const SaveIndex = (index) => {
	return {
		type: types.SAVE__INDEX,
		payload: index,
	};
};
