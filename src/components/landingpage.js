import React from 'react';
import { Grid, Cell} from 'react-mdl';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Link } from 'react-router-dom';

import Graphic from './img/Graphic.png';
import Mix from './img/Mix.png';
import Prototype from './img/Prototype.png';
import Editorial from './img/Editorial.png';
import Dreamy from './img/Dreamy.jpg';
import Chiva from './img/Chiva.jpg';
import Foam from './img/Foam.png';
import Mono from './img/Mono.jpg';
import Sweet from './img/Sweet.png';
import Upa from './img/Upa.png';
import Waya from './img/WayA.jpg';
import Aves from './img/aves-01.jpg';
import Slide1 from './img/Slide1.jpg';
import Slide2 from './img/Slide2.jpg';
import Slide3 from './img/Slide3.jpg';
import Slide4 from './img/Slide4.jpg';
import Instagram from './img/Icon-35.png';
import linkedin from './img/Icon-36.png';
import Karen from './img/karen1.jpg';
import more from './img/more-37.png';
import card from './img/Contact-39.png';
import logocard from './img/Contact-40.png';
import name from './img/contact_link-21.png';
import mail from './img/contact_link-22.png';
import linkin from './img/contact_link-23.png';
import insta from './img/contact_link-24.png';
import tel from './img/contact_link-25.png';







class Landing extends React.Component {
  

    render() {
      return(
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
            <Cell col={8}>
            
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
              <img  className="slider" src={Slide1} alt="slide1"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={Slide2} alt="slide2"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={Slide3} alt="slide3"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={Slide4} alt="slide4"></img>
          </div>
        </Slide>
      </div>
              
      <div >
          
               <img  className="my_work" src={Graphic} alt="graphic" ></img>
               <img  className="my_work" src={Editorial}alt="editorial"></img>
              <img  className="my_work" src={Prototype} alt="prototype"></img>
              <img  className="my_work" src={Mix} alt="mix"></img>
          
          
      </div>  
      
      <section id='mywork'> 
      <div className="galery_container">
    <div className="gallery">
         
           <Link to="Dreamy">
              <img  className="projects" src={Dreamy} alt="dreamy"></img></Link>
           <Link to="Sweet">
              <img  className="projects" src={Sweet} alt="sweet"></img></Link>
    </div>
    
    <div className="gallery">
          <Link to="Foam">
              <img  className="projects" src={Foam} alt="foam"></img></Link>
          <Link to="Upa">
              <img  className="projects" src={Upa} alt="upa"></img></Link>
    </div>
    
    <div className="gallery">    
          <Link to="Mono">
              <img  className="projects" src={Mono} alt="mono"></img></Link>
          <Link to="Chiva">
              <img  className="projects" src={Chiva} alt="chiva"></img></Link>
    </div>

    <div className="gallery">    
          <Link to="Aves">
              <img  className="projects" src={Aves} alt="aves"></img></Link>
          <Link to="Waya">
              <img  className="projects" src={Waya} alt="waya"></img></Link>
    </div>
    </div>
    </section>

              
            </Cell>
          </Grid>
          
          <div className="sumary">
            <img  className="my_pic" src={Karen} alt="logo"></img>
   
            <div className="text">
              <h1>About me</h1>
              <p>
              I have always striven to live a life filled with art and design. Each detail matters when designing, and as such, I always place a keen focus on ensuring that all details are covered and that all work is completed with the highest possible standard of quality.

              </p>
              <Link to="AboutMe">
              <img  className="more" src={more} alt="back"></img></Link>

            </div>

          </div>

          <div className="contact">
            <img  className="card" src={card} alt="logo"></img>
   
            <div className="contact_info">
              <div>
              <img  className="logocard" src={logocard} alt="logo"></img>
              </div>
              <div className="contact_links">
              <img  className="name" src={name} alt="logo"></img>
              <img  className="links" src={tel} alt="logo"></img>
              <img  className="links" src={mail} alt="logo"></img>
              <a  href="https://www.instagram.com/kadaber.and/" >
                <img  className="links" src={insta} alt="Instagram"></img>
              </a>
              <a href="https://www.linkedin.com/in/karen-bernal-32b60771/" >
                <img  className="links" src={linkin} alt="Linkedin"></img>
              </a>
   
              </div>
   
            </div>

          </div>


          {/* <div className="App">                 
          <Contact />           
          </div> */}



          <div className="footer">

            <div><p>©2020 Al rights reserved to @Kadaber</p></div>

             <div> 
                   <a href="https://www.instagram.com/kadaber.and/" >
                      <img  className="social" src={Instagram} alt="Instagram"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/karen-bernal-32b60771/" >
                      <img  className="social" src={linkedin} alt="Linkedin"></img>
                    </a>
            
            </div> 
          </div>

        </div>
      )
    }
  }
  
  export default Landing;
  


  /*https://www.npmjs.com/package/react-slideshow-image*/