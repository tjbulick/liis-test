import React from 'react';
import './RegistrationForm.css';
import FormInput from './FormInput';
import RegisterButton from './RegisterButton';
import FirebaseService from './services/FirebaseService';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      secondName: '',
      username: '',
      email: '',
      phone: '',
    };
  }

  firebaseService = new FirebaseService();

  handleInputChange = (event) => {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('target: ' + event.target);
    console.log('hey, form was submitted');
    console.log(this.state)
    
    // get values from state
    this.firebaseService.writeUserData();
  }

  render() {
    return (
      <form className="registration-form">
        <div className="branding">
          <img src="logo" alt=""/>
          <span><i><b>your</b>text</i></span>
        </div>
        <h1>Registration Form</h1>
        <FormInput label="First Name" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
        <FormInput label="Second Name" name="secondName" value={this.state.secondName} onChange={this.handleInputChange} />
        <FormInput label="Username" name="username" value={this.state.username} onChange={this.handleInputChange} />
        <FormInput label="Email" name="email" value={this.state.email} onChange={this.handleInputChange} />
        <FormInput label="Phone Number" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
        <RegisterButton onSubmit={this.handleSubmit} />
      </form>
    )
  }
}

export default RegisterForm;
