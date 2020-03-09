import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { rootReducer } from './store/reducers';
import createSagaMiddleware from 'redux-saga';
import { watchFormSubmit } from './sagas';

// use composeEnhancers to use redux-saga enhancer and redux devtools together
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchFormSubmit);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));