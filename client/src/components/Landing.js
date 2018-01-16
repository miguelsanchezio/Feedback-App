import React from 'react';

const Landing = () => {
    return (
        <div className="landing-container">
            <h1 className="landing-title">Welcome to YorN!</h1>
            <h2 className="landing-title-sub">
                The most simple way to request feedback from customers.
            </h2>

            <ul className="landing-list">
                <li>
                    <i className="fa fa-check-square" />Only $1 to create a survey
                </li>
                <li>
                    <i className="fa fa-check-square" />Easy and simple to use
                </li>
                <li>
                    <i className="fa fa-check-square" />Quick access to all your surveys
                </li>
                <li>
                    <i className="fa fa-check-square" />Request feedback from thousands of customers
                </li>
            </ul>

            <a class="landing-button" href="/auth/google">
                Start Now!
            </a>
        </div>
    )
};

export default Landing;