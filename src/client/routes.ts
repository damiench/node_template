import About from './components/About';
import App from './components/App';
import Home from './components/Home';
import UserList from './containers/UserList';

const routes = [
	{
		component: App,
		routes: [
			{
				component: Home,
				exact: true,
				path: '/'
			},
			{
				component: Home,
				path: '/home'
			},
			{
				component: About,
				path: '/about'
			},
			{
				component: UserList,
				path: '/list'
			}
		]
	}
];

export default routes;
