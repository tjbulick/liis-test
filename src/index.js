import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { rootReducer } from './store/reducers';
import createSagaMiddleware from 'redux-saga';
import { watchFormSubmit } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFormSubmit);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));