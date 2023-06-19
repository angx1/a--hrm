
import '../style/session-style.css'
import SessionModal from './session-modal.jsx';
import React, { useState } from 'react'




const Session = (props) => {

    const [modal_state, setModalState] = useState(false);
    function vinyl_animation_in (e) {
       e.target.style.animation = "vinyl-rotation 8s infinite linear";
    }

    function vinyl_animation_out (e) {
        e.target.style.animation = "";
    }

    


    return ( 


        <>  
            
            <div id="session-container" className="border border-dark" >
                <div id="session-vinyl" className="border-bottom border-dark border-1">
                        <img src={props.image} alt="vinyl"  id="vinyl" onMouseOver={vinyl_animation_in} onMouseOut={vinyl_animation_out}/>
                </div>
                <div id="session-desc">
                        <div id="session-desc-text">
                            <h4>
                                {props.tittle}
                            </h4>

                            <p>
                                {props.description}
                            </p>
                        </div>

                        <div id="session-desc-play-button">
                            <button onClick={() => {
                                document.body.style.overflow = "hidden";

                                modal_state ? setModalState(false) : setModalState(true);
                                
                                }}>
                                play 
                            </button>
                        </div>
                        
                        
                        
                </div>
                
            </div>

            {modal_state ? <SessionModal session={props.session} close={(close) => {
                close ? setModalState(false) : setModalState(true);
                }} /> : <></>}

        </>


    );
}
 
export default Session;