import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducers from '../reducers';
import thunk from 'redux-thunk';

export const history = createHistory();
const _routerMiddleware = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(
	_routerMiddleware,
	thunk
)(createStore);

export const store = createStoreWithMiddleware(
	combineReducers({
		...reducers,
		router: routerReducer
	}),
	(<any>window).__REDUX_DEVTOOLS_EXTENSION__ && (<any>window).__REDUX_DEVTOOLS_EXTENSION__()
);
