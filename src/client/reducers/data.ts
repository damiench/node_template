import { IAction, ACTION_TYPES } from '../actions/actions';

export const dataReducer = (state = {}, action: IAction): any => {
	switch(action.type) {
		case ACTION_TYPES.DO_SMTH:
			return { data: null };
		default:
			return state;
	}
};
