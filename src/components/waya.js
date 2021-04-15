import React from 'react';
import { Grid, Cell} from 'react-mdl';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Prototype from './img/Prototype.png';
import Instagram from './img/Icon-35.png';
import linkedin from './img/Icon-36.png';
import waya1 from './img/Waya/WayA-DesignBook_Page_01.jpg';
import waya2 from './img/Waya/WayA-DesignBook_Page_02.jpg';
import waya3 from './img/Waya/WayA-DesignBook_Page_03.jpg';
import waya4 from './img/Waya/WayA-DesignBook_Page_04.jpg';
import waya5 from './img/Waya/WayA-DesignBook_Page_05.jpg';
import waya6 from './img/Waya/WayA-DesignBook_Page_06.jpg';
import waya7 from './img/Waya/WayA-DesignBook_Page_07.jpg';
import waya8 from './img/Waya/WayA-DesignBook_Page_08.jpg';
import waya9 from './img/Waya/WayA-DesignBook_Page_09.jpg';
import waya10 from './img/Waya/WayA-DesignBook_Page_10.jpg';
import waya11 from './img/Waya/WayA-DesignBook_Page_11.jpg';
import waya12 from './img/Waya/WayA-DesignBook_Page_12.jpg';
import waya13 from './img/Waya/WayA-DesignBook_Page_13.jpg';
import waya14 from './img/Waya/WayA-DesignBook_Page_14.jpg';
import waya15 from './img/Waya/WayA-DesignBook_Page_15.jpg';
import waya16 from './img/Waya/WayA-DesignBook_Page_16.jpg';
import waya17 from './img/Waya/WayA-DesignBook_Page_17.jpg';

import back from './img/back-37.png';






class Waya extends React.Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={8}>
        
        <div className="slide-container">
        <Slide>
          <div className="each-slide">
              <img  className="slider" src={waya1} alt="waya"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={waya2} alt="waya"></img>
          </div>
       
          <div className="each-slide">
              <img  className="slider" src={waya3} alt="waya"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={waya4} alt="waya"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={waya5} alt="waya"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={waya6} alt="waya"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={waya7} alt="waya"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={waya8} alt="waya"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={waya9} alt="waya"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={waya10} alt="waya"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={waya11} alt="waya"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={waya12} alt="waya"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={waya13} alt="waya"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={waya14} alt="waya"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={waya15} alt="waya"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={waya16} alt="waya"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={waya17} alt="waya"></img>
          </div>
       
       


        </Slide>
      </div>
  <div>
    <Grid className="dreamy">
      <Cell col={4}>
          <h1>Foam Party</h1>
          <h4>2019</h4>
          <img src={Prototype} alt="Prototype"></img>
      </Cell>
      <Cell col={8}>
        <p>Every day we consume large amounts of energy that continue to affect our planet. The current situation is a warning about the need to make changes in our lifestyle. We do not want to reach a point of no return. We have to learn to generate and spend energy sustainably from now on. But to be meaningful, the change must be collective. WAY-A aims to explore new ways to collect renewable energy by involving the population.
WAY-A is a renewable energy system that installs smart tiles in crowded public spaces, such as Toronto's PATH. Through a mobile application, the user can see how much energy generates. Part of the energy collected goes for the common good, and a percentage is for the user, who, through a point system, can exchange or donate that energy. In this way, the production of clean energy is becoming part of the daily activities of the population. </p>
   
              
              <Link to="LandingPage">
              <img  className="back" src={back} alt="back"></img></Link>


      </Cell>
    </Grid>
  </div>
  </Cell>
  </Grid>
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

export default Waya;