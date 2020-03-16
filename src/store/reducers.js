import { CHANGE_FORM_INPUT, REGISTRATION_SUCCEEDED } from './actions';

const initialState = {
    isRegistred: false,
    id: null,
    registrationFormFields: {
        firstName: '',
        secondName: '',
        username: '',
        email: '',
        phone: '',
    },
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_FORM_INPUT:
            const newState = { ...state };
            newState.registrationFormFields[action.inputName] = action.payload;
            return newState
        case REGISTRATION_SUCCEEDED:
            return { ...state, isRegistred: true, id: action.payload };
        default:
            return state
    }
}