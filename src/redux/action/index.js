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

export const ADD_IDENTITY = (data) => ({
	type: types.ADD_IDENTITY_TYPE,
	payload: data,
});

export const ADD_COVID = (data) => ({
	type: types.ADD_COVID_TYPE,
	payload: data,
});

export const ADD_EVENT = (data) => ({
	type: types.ADD_EVENT_TYPE,
	payload: data,
});

export const UPLOAD_DATA = () => ({ type: types.UPLOAD_DATA_TYPE });
