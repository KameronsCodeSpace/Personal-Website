import React from 'react';
import project1 from '../../images/Project1.jpg';
import project2 from '../../images/Project2.jpg';
import project3 from '../../images/Project3.png';
import project4 from '../../images/Project4.png';
import project5 from '../../images/Project5.png';
import project6 from '../../images/Project6.jpg';

// https://the-youtube-replica.netlify.com/

function Projects() {
    return (
        <div className='Projects-Section' id="Projects">
            <h1> Projects</h1>
            <section className='xop-section'>
                <div className='xop-container'>
                    <p className='project' href=' '>
                        <figure>
                            <img src={project1} alt='project1 img' />
                            <figcaption>
                                <div>
                                    <h3>A9 Fashion Design</h3>
                                    <a href='https://github.com/KameronsCodeSpace/Fashion-Hackathon'><p className='cta'>View Project</p></a>
                                </div>
                            </figcaption>
                        </figure>
                    </p>
                    <p className='project' href=' '>
                        <figure>
                            <img src={project2} alt='project2 img' />
                            <figcaption>
                                <div>
                                    <h3>Collage Entourage</h3>
                                    <a href='https://github.com/KameronsCodeSpace/Social-Media-React'><p className='cta'>View Project</p></a>
                                </div>
                            </figcaption>
                        </figure>
                    </p>
                    <p className='project' href=' '>
                        <figure>
                            <img src={project3} alt='project3 img' />
                            <figcaption>
                                <div>
                                    <h3>Pokehangmon</h3>
                                    <a href='https://github.com/KameronsCodeSpace/Pokehangmon'><p className='cta'>View Project</p></a>
                                </div>
                            </figcaption>
                        </figure>
                    </p>
                    <p className='project' href=' '>
                        <figure>
                            <img src={project4} alt='project4 img' />
                            <figcaption>
                                <div>
                                    <h3>Youtube Api</h3>
                                    <a href='https://the-youtube-replica.netlify.com/'><p className='cta'>View Project</p></a>
                                </div>
                            </figcaption>
                        </figure>
                    </p>
                    <p className='project' href=' '>
                        <figure>
                            <img src={project5} alt='projec5 img' />
                            <figcaption>
                                <div>
                                    <h3>Game of Life</h3>
                                    <a href='https://kamerons-game-of-life.netlify.com/'><p className='cta'>View Project</p></a>
                                </div>
                            </figcaption>
                        </figure>
                    </p>
                    <p className='project' href=' '>
                        <figure>
                            <img src={project6} alt='project6 img' />
                            <figcaption>
                                <div>
                                    <h3>Lurk</h3>
                                    <a href='https://github.com/KameronsCodeSpace/SocialMediaApp'><p className='cta'>View Project</p></a>
                                </div>
                            </figcaption>
                        </figure>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Projects;
