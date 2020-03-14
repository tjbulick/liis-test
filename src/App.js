import React from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm';
import rocketImage from './rocket.jpg';
import { connect } from 'react-redux';

const App = () => {
    return (
        <div className="app">
            <RegistrationForm />
            <img src={rocketImage} alt="" height="500px" />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isRegistred: state.isRegistred,
    }
};

export default connect(mapStateToProps)(App);