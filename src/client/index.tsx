import ReactDOM = require('react-dom');
import * as React from 'react';
import { Provider } from 'react-redux';
import { store, history } from './store/createStore';
import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import App from './components/App';
import routes from './routes';

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history} >
			{ renderRoutes(routes) }
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
