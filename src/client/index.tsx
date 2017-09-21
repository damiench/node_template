import ReactDOM = require('react-dom');
import * as React from 'react';
import { Provider } from 'react-redux';
import { store, history } from './store/createStore';
import { ConnectedRouter } from 'react-router-redux';
import App from './components/App';

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history} >
			<App location={'localhost'}> </App>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
