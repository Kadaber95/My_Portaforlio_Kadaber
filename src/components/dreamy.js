import React from 'react';
import { Grid, Cell} from 'react-mdl';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Prototype from './img/Prototype.png';
import Instagram from './img/Icon-35.png';
import linkedin from './img/Icon-36.png';
import dreamy1 from './img/dreamy/dreamy-01.png';
import dreamy2 from './img/dreamy/dreamy-02.png';
import dreamy3 from './img/dreamy/dreamy-03.png';
import dreamy4 from './img/dreamy/dreamy-04.png';
import dreamy5 from './img/dreamy/dreamy-05.png';
import dreamy6 from './img/dreamy/dreamy-06.png';
import dreamy7 from './img/dreamy/dreamy-07.png';
import dreamy8 from './img/dreamy/dreamy-08.png';
import dreamy9 from './img/dreamy/dreamy-09.png';
import dreamy10 from './img/dreamy/dreamy-10.png';
import dreamy12 from './img/dreamy/dreamy-12.png';
import dreamy13 from './img/dreamy/dreamy-13.png';
import dreamy14 from './img/dreamy/dreamy-14.png';
import dreamy15 from './img/dreamy/dreamy-15.png';
import dreamy16 from './img/dreamy/dreamy-16.png';
import dreamy17 from './img/dreamy/dreamy-17.png';
import dreamy18 from './img/dreamy/dreamy-18.png';
import dreamy19 from './img/dreamy/dreamy-19.png';
import dreamy20 from './img/dreamy/dreamy-20.png';
import dreamy21 from './img/dreamy/dreamy-21.png';
import dreamy22 from './img/dreamy/dreamy-22.png';
import dreamy23 from './img/dreamy/dreamy-23.png';
import dreamy24 from './img/dreamy/dreamy-24.png';
import dreamy25 from './img/dreamy/dreamy-25.png';
import dreamy26 from './img/dreamy/dreamy-26.png';
import back from './img/back-37.png';





class Dreamy extends React.Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={8}>
        
        <div className="slide-container">
        <Slide>
          <div className="each-slide">
              <img  className="slider" src={dreamy1} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy2} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy3} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy4} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy5} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy6} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy7} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy8} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy9} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy10} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy12} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy13} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy14} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy15} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy16} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy17} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy18} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy19} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy20} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy21} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy22} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy23} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy24} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy25} alt="dreamy"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={dreamy26} alt="dreamy"></img>
          </div>


        </Slide>
      </div>
  <div>
    <Grid className="dreamy">
      <Cell col={4}>
          <h1>Dreamy</h1>
          <h4>2018</h4>
          <img src={Prototype} alt="prototype"></img>
      </Cell>
      <Cell col={8}>
        <p>The first and most essential feature the hat has is the monitor and tracker of sleeping habits. This feature will let you know how many hours did you sleep, if your rested or not and it will rate your habits comparing them with what an average person should rest. This will help you to develop better sleep and resting habits.
        As an upgrade to the sleeping monitor, the hat will include a brain activity sensor. This element will track the activity of every part of your brain while you sleep. This feature will help mostly help people that suffer from any sleeping disorder and it will be a bonus for curious users.

        As its principal function, the hat will count with a dream recorder monitor. This element is connected to the brain activity sensor, and it will be able to translate waves and electric signals into images or videos. These dreams will be saved on the app and you will be able to watch, read and share your dreams.</p><br></br>

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

export default Dreamy;