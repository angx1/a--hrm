
import React, { useState } from 'react'
import './App.css';


import NavBar from './components/nav-bar';
import Radio from './components/radio';
import Blog from './components/blog';
import ShowRoom from './components/showroom';
import AboutMe from './components/about-me';
import Home from './components/home';




function App(props) {


  const [nabvar_state, setNavBarState] = useState(true);
  const [blog_state, setBlogState] = useState(false);
  const [radio_state, setRadioState] = useState(false);
  const [showroom_state, setShowroomState] = useState(false);
  const [about_me_state, setAboutMeState] = useState(false);
  const [home_state, setHomeState] = useState(true);

  
  
  

  const handleShowingNavBar = () => {
    nabvar_state ? setNavBarState(false) : setNavBarState(true);
  }
  const handleShowingBlog = () => {
    setNavBarState(false);
    setBlogState(true);
    setRadioState(false);
    setShowroomState(false);
    setAboutMeState(false);
    setHomeState(false);

    document.body.style.backgroundColor = "var(--black)";
    document.body.style.overflow = "hidden";
    document.body.style.color = "var(--white3)";
  

    

  }

  const handleShowingRadio = () => {
    setNavBarState(false);
    setBlogState(false);
    setRadioState(true);
    setShowroomState(false);
    setAboutMeState(false);
    setHomeState(false);

    
    document.body.style.backgroundColor = "var(--back)";
    document.body.style.overflow = "auto";
    document.body.style.color = "var(--back)";

  


  }

  const handleShowingShowRoom = () => {
    setNavBarState(false);
    setBlogState(false);
    setRadioState(false);
    setShowroomState(true);
    setAboutMeState(false);
    setHomeState(false);


    document.body.style.backgroundColor = "var(--white2)";
    document.body.style.overflow = "hidden";
    document.body.style.color = "var(--white3)";
  }
  const handleShowingAboutMe= () => {
    setNavBarState(false);
    setBlogState(false);
    setRadioState(false);
    setShowroomState(false);
    setAboutMeState(true);
    setHomeState(false);

    document.body.style.backgroundColor = "var(--orange3)";
    document.body.style.overflow = "hidden"
    document.body.style.color = "var(--back)";


  }
  const handleReturnHome = () => {
    setNavBarState(false); 
    setBlogState(false);
    setRadioState(false);
    setShowroomState(false);
    setAboutMeState(false);
    setHomeState(true);
    
    //document.body.style.animation = "to-home-from-radio 1.5s";
    document.body.style.backgroundColor = "var(--backg-color)";
    document.body.style.overflow = "hidden";
    document.body.style.color = "var(--back)";

  }
 

  
// d-none

  return (
    
    <>
      <NavBar
        onShowingNavBar={() => handleShowingNavBar()} 
        showNavBar={nabvar_state} 
        onShowingBlog={() => handleShowingBlog()}
        onShowingRadio={() => handleShowingRadio()}
        onShowingShowRoom={() => handleShowingShowRoom()}
        onShowingAboutMe={() => handleShowingAboutMe()}
        onReturnHome={() => handleReturnHome()}
        />
      {home_state ? <Home/> : <></>}
      {blog_state ? <Blog/> : <></>}
      {radio_state ? <Radio/> : <></>}
      {showroom_state ? <ShowRoom/> : <></>}
      {about_me_state ? <AboutMe/> : <></>}
      
     
    </>
  );  
}

export default App; 
