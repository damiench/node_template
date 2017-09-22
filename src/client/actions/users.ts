import { IAction, ACTION_TYPES } from './actions';
import 'isomorphic-fetch';

const defaultUsersRoutes = '//jsonplaceholder.typicode.com/users';

export const loadUsers = (usersList: Array<object>): IAction => {
	return {
		type: ACTION_TYPES.USERS_LOADED,
		value: usersList
	};
};

export const fetchUsers = () => (dispatch: Function) => {
	return fetch(defaultUsersRoutes)
		.then((res) => {
			return res.json();
		})
		.then((users: Array<object>) => {
			dispatch(loadUsers(users));
		})
		.catch((err) => {
			console.error(err);
		});
};
