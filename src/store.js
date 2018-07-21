import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './yt/ducks/index';

const middlewares = [thunk];
let composeEnhancers = compose;

if(typeof process != 'undefined' && process.env && process.env.NODE_ENV != 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

// only freeze in dev and modern browsers
if(typeof process != 'undefined' && process.env && process.env.NODE_ENV != 'production' && Object.entries){
    middlewares.push(require('redux-freeze'));
}

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
