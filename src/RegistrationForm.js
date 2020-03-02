import React from 'react';
import './RegistrationForm.css';
import FormInput from './FormInput';
import RegisterButton from './RegisterButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createInputChangeAction, createFormSubmitAction } from './store/actions';

class RegistrationForm extends React.Component {

  handleInputChange = (event) => {
    const { changeFormInput } = this.props;
    changeFormInput(event);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    
    const { submitForm } = this.props;
    submitForm();
  }

  render() {
    return (
      <form className="registration-form">
        <div className="branding">
          <img src="logo" alt=""/>
          <span><i><b>your</b>text</i></span>
        </div>
        <h1>Registration Form</h1>
        <FormInput label="First Name" name="firstName" value={this.props.firstName} onChange={this.handleInputChange} />
        <FormInput label="Second Name" name="secondName" value={this.props.secondName} onChange={this.handleInputChange} />
        <FormInput label="Username" name="username" value={this.props.username} onChange={this.handleInputChange} />
        <FormInput label="Email" name="email" value={this.props.email} onChange={this.handleInputChange} />
        <FormInput label="Phone Number" name="phone" value={this.props.phone} onChange={this.handleInputChange} />
        <RegisterButton onSubmit={this.handleSubmit} />
      </form>
    )
  }
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
