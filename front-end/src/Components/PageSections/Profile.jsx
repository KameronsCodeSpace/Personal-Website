import React from 'react';

function Profile() {
    return (
        <div className='Profile-Section' id="Profile">
            <div className='align-right'>
                <h1>Kameron Montague</h1>
                <p>Full Stack Web Developer</p>
                <p>
                    Lorem ipsum dolor sit amet, etiam
                    atomorum corrumpit eum no, sed ex
                    imperdiet vituperatoribus, eam errem
                    eleifend no. Nullam dictas albucius an his,
                    pericula evertitur sea ad. Qui ea
                    commune omnesque mediocrem, id eos
                    tempor iudicabit. Nec latine aliquam ei.
                </p>
                <a href='https://docs.google.com/document/d/1jygdfu9DGSpMzfHDbWzr40ZPji99_oK0CucsfaoCiGM/edit?usp=sharing'><button className='btn'>Download Resume</button></a>

            </div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrrUUCpJipBHo_h3dGxcKgVeZMIn8nHT6dSMU8H3Sb-sjB2naq' alt='' />
            </div>
            <div className='align-left'>
                <p>
                    Lorem ipsum dolor sit amet, etiam
                    atomorum corrumpit eum no, sed ex
                    imperdiet vituperatoribus, eam errem
                    eleifend no. Nullam dictas albucius an his,
                    pericula evertitur sea ad. Qui ea
                    commune omnesque mediocrem, id eos
                    tempor iudicabit. Nec latine aliquam ei.
                </p>
            </div>
        </div>
    );
}

export default Profile;
