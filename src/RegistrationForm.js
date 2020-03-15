import React from 'react';
import './RegistrationForm.css';
import FormInput from './FormInput';
import RegisterButton from './RegisterButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createInputChangeAction, createFormSubmitAction } from './store/actions';
import TwoInputRow from './TwoInputRow';

const RegistrationForm = (props) => {

  const handleInputChange = (event) => {
    const { changeFormInput } = props;
    changeFormInput(event);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const { submitForm } = props;
    submitForm();
  }

  return (
    <form className="registration-form">
      <div className="branding">
        <img src="logo" alt="" />
        <span><i><b>your</b>text</i></span>
      </div>
      <h1>Registration Form</h1>
      <TwoInputRow>
        <FormInput label="First Name" name="firstName" value={props.firstName} onChange={handleInputChange} />
        <FormInput label="Second Name" name="secondName" value={props.secondName} onChange={handleInputChange} />
      </TwoInputRow>
      <FormInput label="Username" name="username" value={props.username} onChange={handleInputChange} />
      <FormInput label="Email" name="email" value={props.email} onChange={handleInputChange} />
      <FormInput label="Phone Number" name="phone" value={props.phone} onChange={handleInputChange} />
      <RegisterButton onSubmit={handleSubmit} />
    </form>
  )
}

const mapStateToProps = (state) => {
  return { ...state.registrationFormFields }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFormInput: bindActionCreators(createInputChangeAction, dispatch),
    submitForm: bindActionCreators(createFormSubmitAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
