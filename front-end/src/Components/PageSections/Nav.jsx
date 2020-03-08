import React from 'react';
import { Link } from "react-scroll";


function Nav() {
    return (
        <div className='Navbar'>
            <h2>KAMERON</h2>
                <Link
                    activeClass="active"
                    to="Profile"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Profile</Link>

                <Link
                    activeClass="active"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Projects</Link>

                <Link
                    activeClass="active"
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Skills</Link>

                <Link
                    activeClass="active"
                    to="Achievements"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Achievements</Link>

                <Link
                    activeClass="active"
                    to="Hobbies"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Hobbies</Link>
                <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >Contact</Link>
        </div>
    );
}

export default Nav;
