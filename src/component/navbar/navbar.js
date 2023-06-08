import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import './navbar.css'

import { faMagnifyingGlass, faHome, faUser, faBriefcase, faSave, faArrowRightFromBracket, faCircleQuestion, faGear, faYinYang } from '@fortawesome/free-solid-svg-icons'
class Navbar extends Component {
    render() {
        return (
            <>
            <div className='navbar'>
                <h4> <FontAwesomeIcon icon={faMagnifyingGlass} className='glass' /> Concured</h4>
                <div className='firstnav'>
                    <nav>
                        <li><NavLink to='/overview' className="navlink">
                            <FontAwesomeIcon icon={faHome} /> Overview
                        </NavLink></li>
                        <li><NavLink to='/opportunties' className="navlink">
                            <FontAwesomeIcon icon={faYinYang} />   Opportunities
                        </NavLink></li>
                        <li><NavLink to='/competitors' className="navlink">
                            <FontAwesomeIcon icon={faUser} />   My competitors
                        </NavLink></li>
                        <li><NavLink to='/brief' className="navlink">
                            <FontAwesomeIcon icon={faBriefcase} />  Briefs
                        </NavLink></li>
                        <li>
                            <NavLink to='/saved' className="navlink">
                                <FontAwesomeIcon icon={faSave} />      Saved
                            </NavLink>
                        </li>
                    </nav>
                </div>
                <div className='lastnav'>
                    <nav>
                        <li>
                            <NavLink to='/setting' className="navlink">
                                <FontAwesomeIcon icon={faGear} />    Settings
                            </NavLink></li>

                        <li><NavLink to='/help' className="navlink">
                            <FontAwesomeIcon icon={faCircleQuestion}/>   Help
                        </NavLink></li>
                        <li><NavLink to='/logout' className="navlink">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className='logout' />   Logout
                        </NavLink></li>
                    </nav>
                </div>
                </div>
            </>
        );
    }
}
export default Navbar;
