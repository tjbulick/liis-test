import React from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm';
import rocketImage from './rocket.jpg';
import { connect } from 'react-redux';
import YouAreRegistred from './YouAreRegistred';

const App = (props) => {
    return (
        <div className="app">
            {props.isRegistred ? <YouAreRegistred id={props.id} /> : <RegistrationForm />}
            <img src={rocketImage} alt="" height="500px" />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isRegistred: state.isRegistred,
        id: state.id,
    }
};

export default connect(mapStateToProps)(App);