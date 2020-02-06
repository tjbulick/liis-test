import React from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm';
import rocketImage from './rocket.jpg';

function App() {
    return (
        <div className="app">
            <RegistrationForm />
            <img src={rocketImage} alt="" height="500px" />
        </div>
    )
}

export default App;