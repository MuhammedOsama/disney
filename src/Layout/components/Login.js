import React from 'react';

// style
import './styles/Login.scss';

export default function Login() {
    return <div id='login'>
        <div className='content'>
            <div className='cta'>
                <img className='cta-logo-one' src='./images/cta-logo-one.svg' alt='CTA Logo One'/>
                <a className='cta-sign-up' href="/">Get All There</a>
                <p className='cta-description'>Get Premier Access to Raya and the Last Dragon for an additional fee with
                    a Disney subscription. As of 03/26/2022, the price of Disney and The Disney Bundle will increase by
                    $1.</p>
                <img className='cta-logo-two' src='./images/cta-logo-two.png' alt='CTA Logo Two'/>
            </div>
            <img className='bg-img' src='./images/login-background.jpg' alt='Login Background'/>
        </div>
    </div>
}
