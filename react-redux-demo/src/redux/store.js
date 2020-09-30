import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //to log redux state change
import { composeWithDevTools } from 'redux-devtools-extension'; //redux dev tool
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

//const store = createStore(rootReducer);

//const store = createStore(rootReducer, applyMiddleware(logger));

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
