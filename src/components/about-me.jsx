import React, { useState } from 'react'
import '../style/about-style.css'

import LinkModal from './link-modal.jsx';


import PERSONAL from '../media/ahrm-logo.svg';
import LINKS from '../media/link.svg';



const AboutMe = (props) => {
    
    const [links_state, setLinksState] = useState(false);
    
   
    //www.youtube.com/@ahrmoran
    return ( 
        <>
            <div id="resume" className="center">
                <p> 
                    hi! this is <strong>angel®</strong>, a random 19 year old student with a huge appetite of success.
                    artist, dj, engineer and creative developer.
                </p>
            
                <div id="social">
                    <img className="logo-2" src={LINKS} alt="a-rm logo" id="link-img" onClick={() => {
                        document.body.style.overflow = "hidden";

                        links_state ? setLinksState(false) : setLinksState(true);
                        
                        }}></img> 
                </div>
                

                {links_state ? <LinkModal close={(close) => {close ? setLinksState(false) : setLinksState(true);}}/> : <></>}
                  

            </div>
            <img className="logo-1" src={PERSONAL} alt="a-rm logo" />  
        </>
     );
}
 
export default AboutMe;