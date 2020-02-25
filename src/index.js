import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
// import rootReducer from './reducers';
import App from './App';
import './index.css';

const initialState = {
    isRegistred: false,
    registrationFormFields: {},
}

const SUCCESSFUL_REGISTRATION = 'SUCCESSFUL_REGISTRATION';

function rootReducer(state, action) {
    switch (action.type) {
        case SUCCESSFUL_REGISTRATION:
            return { ...state, isRegistred: true }
        default:
            return state
    }
}

const actionSuccessfulRegistration = {
    type: SUCCESSFUL_REGISTRATION,
    payload: null, // no payload needed, lol
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));