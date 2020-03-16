import React from 'react';
import './YouAreRegistred.css';

const YouAreRegistred = (props) => {
    return (
        <div className="you-are-registred">
            <h1>You are successfully registred!</h1>
            <h3>Your unique ID in Firebase is {props.id}</h3>
            <h3>Contact me, to check out database content: </h3>
            Telegram: <a href="https://t.me/tjbulick" target="_blank">tjbulick</a>
            <br/>
            ВКонтакте: <a href="https://vk.com/tjbulick" target="_blank">tjbulick</a>
            <br/>
            E-mail: <a href="mailto:e.pichtchalnikov@gmail.com?subject=Доступ к Firebase">e.pichtchalnikov@gmail.com</a>
        </div>
    )
}

export default YouAreRegistred;