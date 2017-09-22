export interface IAction {
	type: string,
	value: any
};

export const ACTION_TYPES = {
	'DO_SMTH': 'do smth',
	'USERS_LOADED': 'load users'
};
