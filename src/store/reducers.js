import { CHANGE_FORM_INPUT } from './actions';

const initialState = {
    isRegistred: false,
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
        default:
            return state
    }
}