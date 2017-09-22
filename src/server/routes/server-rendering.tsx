import * as React from 'react';
import thunk from 'redux-thunk';
import * as requst from 'request';
import * as express from 'express';
import StaticRouter from 'react-router-dom/StaticRouter';

import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { createStore, combineReducers, applyMiddleware } from 'redux'

import routes from '../../client/routes';
import reducers from '../../client/reducers';

const router = express.Router();

const store = createStore(combineReducers({...reducers}), applyMiddleware(thunk));

router.get('*', (req, res) => {
	const branch = matchRoutes(routes, req.url);

	console.log('working')
	let context = {};

	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.url} context={context}>
				{ renderRoutes(routes) }
			</StaticRouter>
		</Provider>
	);

	res.render('index', { title: 'Express', data: store.getState(), content });
});

export default router;
