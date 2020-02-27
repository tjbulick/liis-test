export const SUCCESSFUL_REGISTRATION = 'SUCCESSFUL_REGISTRATION';
export const CHANGE_FORM_INPUT = 'CHANGE_FORM_INPUT';

// action creator for input change events
export const createInputChangeAction = (event) => {
    return {
        type: CHANGE_FORM_INPUT,
        inputName: event.target.name,
        payload: event.target.value,
    }
};
