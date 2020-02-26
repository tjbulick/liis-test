import React from 'react';
import './RegistrationForm.css';
import FormInput from './FormInput';
import RegisterButton from './RegisterButton';
import FirebaseService from './services/FirebaseService';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createInputChangeAction } from './store/actions';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.firebaseService = new FirebaseService();
  }

  handleInputChange = (event) => {
    const { changeFormInput } = this.props;
    changeFormInput(event);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    
    // get values from state and send them as object to firebase
    // this is a side-effect
    this.firebaseService.writeUserData({
      firstName: this.props.firstName,
      secondName: this.props.secondName,
      username: this.props.username,
      email: this.props.email,
      phone: this.props.phone,
    });
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
