import React from 'react'
//import wallpaper from '../media/0003-8604.gif';
import '../style/home-style.css'




const Home = (props) => {
    
    /*     Parallax Effect - Unable
    document.addEventListener("mousemove", parallax);

    function parallax(e){
        document.querySelectorAll(".node").forEach(layer => {

            const moving_value = layer.getAttribute("data-value");
    
            const x = (window.innerWidth - e.pageX * moving_value)/250
            const y = (window.innerHeight - e.pageY * moving_value)/250

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`; 
            
            

        });   
    } 
    */

    //  <div className="position-absolute top-50 start-50 translate-middle w-75" id="wallpaper"><img src={wallpaper}/></div> 
    return ( 
        
        <>  
        <div id="container" className='center'> 
            <div id="node1" className='center' data-value="-1">
                
            </div>
           
            
        </div>
        </>
     );
}
 
export default Home;


/*

rest of nodes : <div id="node2" className="node" data-value="-2">
                    <div id="node3" className="node" data-value="-3">
                    </div>
                </div>



*/ 