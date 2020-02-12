import React from 'react';
import './RegistrationForm.css';
import FormInput from './FormInput';
import RegisterButton from './RegisterButton';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBSTRgnDd3k1x5x5NAK7A4jpFoMKTVY_OA",
  authDomain: "liis-test.firebaseapp.com",
  databaseURL: "https://liis-test.firebaseio.com",
  projectId: "liis-test",
  storageBucket: "liis-test.appspot.com",
  messagingSenderId: "739295187595",
  appId: "1:739295187595:web:1f4e9b004bc96c4af7ba8e"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});

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

  // firebaseService = new FirebaseService();

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
    // this.firebaseService.writeUserData();
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
