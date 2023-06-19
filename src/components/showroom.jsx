import React from 'react'
import '../style/showroom-style.css'
import ArtWork from './artwork.jsx'

import asset1 from '../media/pieces/asset1.png';
import asset2 from '../media/pieces/asset2.png';
import asset3 from '../media/pieces/asset3.png';
import asset4 from '../media/pieces/asset4.png';





const ShowRoom = (props) => {
    
    
    return ( 
        <>    
            <div id="showroom-container" className="container text-center center">
                <div className="row row-cols-4">
                    <ArtWork className="col" frame={asset1}/>
                    <ArtWork className="col" frame={asset2}/>
                    <ArtWork className="col" frame={asset3}/>
                    <ArtWork className="col" frame={asset4}/>
                </div>
            </div>        
        </>
     );
}
 
export default ShowRoom;