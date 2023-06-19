import React from 'react'
import Session from './session'
import '../style/session-style.css'

import data from '../media/sessions.json';

import vinyl_1 from '../media/vinyl/alien-vinyl.png';
import vinyl_2 from '../media/vinyl/bluish-vinyl.png';
import vinyl_3 from '../media/vinyl/cats-vinyl.png';
import vinyl_4 from '../media/vinyl/redblack-vinyl.png';

import session_1 from '../sessions/afterlife_mix_vol1.mp4';


const SessionList = () => {
    const session_list = [
        <Session key="2" session={session_1} tittle={data[1].title} description={data[1].description} image={vinyl_2}/>,
        <Session key="3" session={session_1} tittle={data[2].title} description={data[2].description} image={vinyl_4}/>,
        <Session key="1" session={session_1} tittle={data[0].title} description={data[0].description} image={vinyl_1}/>,
        <Session key="4" session={session_1} tittle={data[3].title} description={data[3].description} image={vinyl_3}/>,
        
        
    ]
    return ( 
        
        <>
            <div id="sessions">
                <div id="sessions-grid">{session_list}</div>
            </div>
        </>
     );
}


 
export default SessionList;


/*
<Session key="2"/>,
        <Session key="3"/>,
        <Session key="4"/>,
        <Session key="5"/>*/ 