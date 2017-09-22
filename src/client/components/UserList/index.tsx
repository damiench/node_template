import * as React from 'react';

interface IUserListProps {
	users: Array<any>,
	fetchUsers: Function
};

export default class UserList extends React.Component<any, any> {

	public componentDidMount() {
		this.props.fetchUsers && this.props.fetchUsers();
	}

	private renderUser(user) {
		return <UserItem key={user.id} user={user} />
	};

	render() {
		return (
			<ol>
				{ this.props.users.map(user => this.renderUser(user)) }
			</ol>
		);
	};
};

interface IUserItemProps {
	user: any
};

class UserItem extends React.Component<IUserItemProps, any> {
	render() {
		const { name, email } = this.props.user;

		return (
			<li>
				<span> name: {name} </span><br/>
				<span> email: {email} </span>
			</li>
		)
	};
};
