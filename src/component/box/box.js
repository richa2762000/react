import React from "react";
import './box.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box1 } from "./box1.js";

function Box() {
    return (
        <>
            <div className="container1">
                {Box1.map((data, index) => (
                    <div key={index} className="container3">
                        <div className="cont1">
                            <p>
                                <FontAwesomeIcon icon={data.icon1} className="icon1" />
                            </p>
                            <p>
                                <FontAwesomeIcon icon={data.icon2} className="icon2" />{data.per}
                            </p>
                        </div>
                        <div className="cont2">
                            <h2>
                                {data.head}
                            </h2>
                        </div>
                        <div className="cont3">
                            <p>{data.para2}</p>
                            <p>
                                <FontAwesomeIcon icon={data.icon3} className="icon3"/>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Box;