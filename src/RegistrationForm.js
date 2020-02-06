import React from 'react';
import './RegistrationForm.css';
import FormInput from './FormInput';
import RegisterButton from './RegisterButton';

function RegisterForm() {
  return (
    <form className="registration-form">
      <div className="branding">
        <img src="logo" alt=""/>
        <span><i><b>your</b>text</i></span>
      </div>
      <h1>Registration Form</h1>
      <FormInput label="First Name"/>
      <FormInput label="Second Name"/>
      <FormInput label="Username"/>
      <FormInput label="Email"/>
      <FormInput label="Phone Number"/>
      <RegisterButton />
    </form>
  )
}

export default RegisterForm;
