import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/users';
import UserList from '../components/UserList';

const bindReduxStoreToProps = (state) => {
	return {
		users: state.users
	};
};

const bindActionsToProps = (dispatch) => {
	return {
		fetchUsers: bindActionCreators(fetchUsers, dispatch)
	};
};

export default connect(bindReduxStoreToProps, bindActionsToProps)(UserList);
