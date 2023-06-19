import React from 'react'


const NavBar = (props) => {
    
    const uli = 
    <>
        <div className='d-flex flex-col border border-dark rounded-3'  id='nav-bar-list'>
            <ul className="ms-4 mb-1" id="nav">
                <span href="" className="list-group-item" onClick={() => props.onReturnHome()}><li>HOME</li></span>
                <span href="" className="list-group-item" onClick={() => props.onShowingBlog()}><li>BLOG</li></span>
                <span href="" className="list-group-item" onClick={() => props.onShowingRadio()}><li>RADIO</li></span>
                <span href="" className="list-group-item" onClick={() => props.onShowingBlog()}><li>MY WORK</li></span>
                <span href="" className="list-group-item" onClick={() => props.onShowingAboutMe()}><li>ABOUT ME</li></span>
            </ul>
        </div>        
    </>   
    


    
    return ( 
        <>    
        <div className="d-flex flex-row border border-dark rounded-pill" id='nav-bar' onClick={() => props.onShowingNavBar()/*props.onShowingNavBar*/}>
            <span className='p-2 mx-2 flex-fill'>MENU</span>
            <span className='p-2 mx-2'>+</span>
        </div>
        {props.showNavBar ? uli : <></>}
        </>
     );
}
 
export default NavBar;