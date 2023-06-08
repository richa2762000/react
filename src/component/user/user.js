import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

import './user.css'

function User() {
    return (
        <>
                <div className='user'>
                    <p className='team'><FontAwesomeIcon icon={faUser} className='hash'/><span>Boro Team</span> <FontAwesomeIcon icon={faCaretDown} className='caret' /> <FontAwesomeIcon icon={faPlus} className='plus'/> </p>
                    <p className='zahra'><FontAwesomeIcon icon={faUser} className='hash'/><strong>Zahra Hasht...</strong> <FontAwesomeIcon icon={faCaretDown} className='squaare' /></p>
                </div>
        </>
    )
}
export default User;