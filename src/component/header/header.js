import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

import './header.css'
function Header() {
    return (
        <>
            <div className="pro">
                <div>
                    <h1>Project Statistic<FontAwesomeIcon icon={faCircleQuestion} className="circle"/></h1>
                </div>
                <div className="days">
                    <div className="btn">
                    <p><button className="btn2">30 days</button></p>
                    <p><button className="btn2">60 days</button></p>
                    <p><button className="btn2">6 months</button></p>
                    <p><button className="btn2">12 months</button></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;