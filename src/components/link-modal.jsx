import '../style/about-style.css'
import React from 'react'



import IG from '../media/instagram.svg';
import PINT from '../media/pinterest.svg';
import YOUT from '../media/youtube.svg';



const LinkModal = (props) => {

    return ( 
        <>
            
           <div id="links-container" className="center border border-dark rounded-3">
                <button id="modal-close-button" type="button" className="btn-close" aria-label="Close" onClick={() => {
                         document.body.style.overflow = "auto";
                         document.getElementById("modal-close-button").style.display = "none";
                         props.close(true);
                        /*setTimeout(() =>{
                            props.close(true);    
                        }, 1000)*/
                }}></button>


                <div className="container text-center" >
                    <div className="row">
                    
                        <div className="col">
                            <a href="https://youtube.com/@ahrmoran" rel="noreferrer" target="_blank"><img className="logo" src={YOUT} alt="youtube logo" /></a>
                        </div>
                        <div className="col">
                            <a href="https://www.pinterest.es/ahrmoran/" rel="noreferrer" target="_blank"><img className="logo" src={PINT} alt="pinterest logo" /></a>
                        </div>
                        <div className="col">
                            <a href="https://www.instagram.com/ahrmoran/" rel="noreferrer" target="_blank"><img className="logo-2" src={IG} alt="instagram logo" /></a> 
                        </div>
                    
                        
                        
                    </div>
                </div>

           </div>

        </>
    );
}
 
export default LinkModal;