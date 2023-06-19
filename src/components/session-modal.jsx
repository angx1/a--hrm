

import '../style/session-style.css'


const SessionModal = (props) => {

    
    return ( 
        <>
            
           <div id="modal-container" className="center">
                <div id="modal-header">
                    <button id="modal-close-button" type="button" className="btn-close" aria-label="Close" onClick={() => {
                        document.body.style.overflow = "auto";
                        document.getElementById("modal-container").style.animation = "hide-modal 1s";
                        document.getElementById("modal-close-button").style.display = "none";
                        props.close(true);
                        /*setTimeout(() =>{
                            props.close(true);    
                        }, 1000)*/
                        }}></button>
                </div>
                <div id="modal-content">
                    <video className="center" controls>
                        <source src={props.session} type="video/mp4" />
                    </video>
                   
                </div>
                

                

           </div>
        </>
    );
}
 
export default SessionModal;