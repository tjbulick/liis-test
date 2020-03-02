import { takeEvery, call, put, select } from 'redux-saga/effects';
import { FORM_SUBMIT, createRegistrationSucceededAction } from './store/actions';
import FirebaseService from './services/FirebaseService';

// Как выглядит алгоритм регистрации:
// 1. получить данные формы из стора
// 2. передать их в метод writeUserData()
// 3. в случае успеха задиспатчить экшн REGISTRATION_SUCCEEDED с айди нового документа в базе
// 4. если промис завершился ошибкой, выводим ошибку в консоль

const firebaseService = new FirebaseService();

function sendRegisterRequest(registrationFormFields) {
    // this is a side-effect
    return firebaseService.writeUserData({
        firstName: registrationFormFields.firstName,
        secondName: registrationFormFields.secondName,
        username: registrationFormFields.username,
        email: registrationFormFields.email,
        phone: registrationFormFields.phone,
    });
}

function* formSubmitWorker() {
    // get values from store state
    const registrationFormFields = yield select(state => state.registrationFormFields);
    try {
        // firebase returns a docRef (reference to a document) when you add something to the database
        // send asyncronous request with form fields as an object to firebase
        const result = yield call(sendRegisterRequest, registrationFormFields);
        console.log('Document written with ID: ', result.id);
        yield put(createRegistrationSucceededAction(result))
    } catch (error) {
        console.log('Registration failed with ' + error);
    }
}

export function* watchFormSubmit() {
    yield takeEvery(FORM_SUBMIT, formSubmitWorker)
}