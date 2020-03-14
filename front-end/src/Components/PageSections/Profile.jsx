import React from 'react';
import photo from '../../images/selfphoto.jpg';

function Profile() {
    return (
        <div className='Profile-Section' id="Profile">
            <header>
                <h1>Kameron Montague</h1>
                <p>Full Stack Web Developer</p>
            </header>
            <div className='columns-three'>
                <div className='align-right'>
                    {/* <h1>Kameron Montague</h1>
                <p>Full Stack Web Developer</p> */}
                    {/* <p>
                        Lorem ipsum dolor sit amet, etiam
                        atomorum corrumpit eum no, sed ex
                        imperdiet vituperatoribus, eam errem
                        eleifend no. Nullam dictas albucius an his,
                        pericula evertitur sea ad. Qui ea
                        commune omnesque mediocrem, id eos
                        tempor iudicabit. Nec latine aliquam ei.
                </p> */}

                    <p>
                        I am a Pursuit fellow on a 12 month intensive
                        training program to become a competative Full
                        Stack Web Developer. I've gain a lot of experience
                        working with my fellow classmates on many different
                        projects. I've developed a deep understanding of
                        javascript, css, React, data structures and many
                        other tools needed to become a Full Stack Developer
                    </p>
                    <a href='https://docs.google.com/document/d/1jygdfu9DGSpMzfHDbWzr40ZPji99_oK0CucsfaoCiGM/edit?usp=sharing'><button className='btn'>Download Resume</button></a>
                </div>
                <div>
                    <img src={photo} alt='' />
                </div>
                <div className='align-left'>
                    <li>
                        <h3>HTML5/CSS3</h3><span className="bar"><span className="html-css"></span></span>
                    </li>
                    <li>
                        <h3>Javascript</h3><span className="bar"><span className="javascript"></span></span>
                    </li>
                    <li>
                        <h3>React</h3><span className="bar"><span className="react"></span></span>
                    </li>
                    <li>
                        <h3>C++</h3><span className="bar"><span className="cplusplus"></span></span>
                    </li>
                    <li>
                        <h3>Machine Learning</h3><span className="bar"><span className="machine-learning"></span></span>
                    </li>
                </div>
            </div>
        </div>
    );
}

export default Profile;
