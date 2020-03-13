import React from 'react';

import reactlogo from '../../images/react.jpeg';
import JavascriptLogo from '../../images/JavaScript-logo.png';
import nodejs from '../../images/nodejs.png';
import npm from '../../images/npm-logo.png';

function Skills() {
    return (
        <div className='Skills-Section' id="Skills">
            <h1>Skills</h1>

            <div className="carousel-wrapper">
                <div className="slider">
                    <div className="slide">
                        <img src={reactlogo} alt="" />
                        <img src={JavascriptLogo} alt="" />
                        <img src={nodejs} alt="" />
                        <img src={npm} alt="" />
                    </div>

                    <div className="slide">
                        <img src={reactlogo} alt="" />
                        <img src={JavascriptLogo} alt="" />
                        <img src={nodejs} alt="" />
                        <img src={npm} alt="" />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Skills;
