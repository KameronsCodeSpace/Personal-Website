import React from 'react';
import { Link } from "react-scroll";

function Nav() {
    return (
        <div>
            <div className='nav-wrap'>
                <input type='checkbox' class='toggler' />
                <div className='hamburger'><div></div></div>
                <nav className='nav'>
                    <div>
                        <div>
                            <div className='logo'>
                                <h4>KAMERON</h4>
                            </div>
                            <ul>
                                <li>
                                    <Link
                                        activeClass="active"
                                        to="Profile"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >Profile</Link>
                                </li>

                                <li>
                                    <Link
                                        activeClass="active"
                                        to="Projects"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >Projects</Link>
                                </li>

                                <li>
                                    <Link
                                        activeClass="active"
                                        to="Skills"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >Skills</Link>
                                </li>

                                <li>
                                    <Link
                                        activeClass="active"
                                        to="Achievements"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >Achievements</Link>
                                </li>

                                <li>
                                    <Link
                                        activeClass="active"
                                        to="Hobbies"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >Hobbies</Link>
                                </li>

                                <li>
                                    <Link
                                        activeClass="active"
                                        to="Contact"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    );
}

export default Nav;
