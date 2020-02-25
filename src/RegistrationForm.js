import React from 'react';
import './RegistrationForm.css';
import FormInput from './FormInput';
import RegisterButton from './RegisterButton';
import FirebaseService from './services/FirebaseService';
import { connect } from 'react-redux';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      secondName: '',
      username: '',
      email: '',
      phone: '',
    };
    this.firebaseService = new FirebaseService();
  }

  handleInputChange = (event) => {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    
    // get values from state and send them as object to firebase
    // this is a side-effect
    this.firebaseService.writeUserData({
      firstName: this.state.firstName,
      secondName: this.state.secondName,
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
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

const mapStateToProps = (state) => {
  return {}
};

// const mapDispatchToProps = 

export default connect(mapStateToProps)(RegistrationForm);
