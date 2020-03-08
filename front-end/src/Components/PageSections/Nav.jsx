import React from 'react';
import { Link } from "react-scroll";

function Nav() {
    return (
        <div>
            <nav className="nav">
                <div className='logo'>
                    <h4>KAMERON</h4>
                </div>
                <div>
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
            </nav>
        </div>
    );
}

export default Nav;
