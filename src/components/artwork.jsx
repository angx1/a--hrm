import React from 'react'
import '../style/session-style.css'


const ArtWork = (props) => {
    return ( 
        <>  
            <div>
                <img src={props.frame} alt="artwork" id="artwork-frame"/>   
            </div>
        </> 
    );
}
 
export default ArtWork;