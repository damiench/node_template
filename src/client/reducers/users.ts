import { IAction, ACTION_TYPES } from '../actions/actions';


export const userReducer = (state = [], action: IAction) => {
	switch (action.type) {
		case ACTION_TYPES.USERS_LOADED:
			return action.value;
		default:
			return state;
	}
};
