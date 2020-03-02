export const CHANGE_FORM_INPUT = 'CHANGE_FORM_INPUT';
export const FORM_SUBMIT = 'FORM_SUBMIT';
const REGISTRATION_SUCCEEDED = 'REGISTRATION_SUCCEEDED';

// action creator for input change events
export const createInputChangeAction = (event) => {
    return {
        type: CHANGE_FORM_INPUT,
        inputName: event.target.name,
        payload: event.target.value,
    }
};

// action creator for registration form submit events
export const createFormSubmitAction = () => {
    return {
        type: FORM_SUBMIT,
    }
};

export const createRegistrationSucceededAction = (docRef) => {
    return {
        type: REGISTRATION_SUCCEEDED,
        payload: docRef.id,
    }
};
