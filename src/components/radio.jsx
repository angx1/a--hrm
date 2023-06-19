import React from 'react'
import SessionList from './session-list'

import FM from '../media/fm-logo.svg';


document.body.style.overflow = "auto"


const Radio = (props) => {
    return ( 
        <> 
            <img id="fm-logo" src={FM} alt="fm logo" />
            <SessionList/>
        </>
     );
}
 
export default Radio;