import React from 'react';
import { Grid, Cell} from 'react-mdl';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Graphic from './img/Graphic.png';
import Instagram from './img/Icon-35.png';
import linkedin from './img/Icon-36.png';
import foam1 from './img/foam/FoamParty-01.png';
import foam2 from './img/foam/FoamParty-02.png';
import foam3 from './img/foam/FoamParty-03.png';
import foam4 from './img/foam/FoamParty-04.png';
import foam5 from './img/foam/FoamParty-05.png';
import foam6 from './img/foam/FoamParty-06.png';
import foam7 from './img/foam/FoamParty-07.png';
import foam8 from './img/foam/FoamParty-08.png';
import foam9 from './img/foam/FoamParty-09.png';
import foam10 from './img/foam/FoamParty-10.png';
import foam11 from './img/foam/FoamParty-11.png';
import foam12 from './img/foam/FoamParty-12.png';
import foam13 from './img/foam/FoamParty-13.png';
import foam14 from './img/foam/FoamParty-14.png';
import foam15 from './img/foam/FoamParty-15.png';
import foam16 from './img/foam/FoamParty-16.png';
import foam17 from './img/foam/FoamParty-17.png';
import foam18 from './img/foam/FoamParty-18.png';
import foam19 from './img/foam/FoamParty-19.png';
import foam20 from './img/foam/FoamParty-20.png';
import foam21 from './img/foam/FoamParty-21.png';
import back from './img/back-37.png';






class Foam extends React.Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={8}>
        
        <div className="slide-container">
        <Slide>
          <div className="each-slide">
              <img  className="slider" src={foam1} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam2} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam3} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam4} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam5} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam6} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam7} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam8} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam9} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam10} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam11} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam12} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam13} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam14} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam15} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam16} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam17} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam18} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam19} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam20} alt="foam"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={foam21} alt="foam"></img>
          </div>


        </Slide>
      </div>
  <div>
    <Grid className="dreamy">
      <Cell col={4}>
          <h1>Foam Party</h1>
          <h4>2019</h4>
          <img src={Graphic} alt="graphic"></img>
      </Cell>
      <Cell col={8}>
        <p>Foam Party Cafe will be a brand that offers more than a product. We offer experience.

The option of customizing the drinks treats and even in what they are going to be served gives the customer the power of choosing, and people like having options.

The product itself is different from what all coffee shops offer. We will be serving 100% Colombian coffee, growth, processed, roasted, and packed in the Coffee mountains of Colombia. Ranked as the best coffee produced in America. Not only the drinks but the sweets as will bill be customized, giving the customer the option of mixing flavors and topping on cake pops. The place itself will have a warm feeling of home, glamorous and chick.</p><br></br>

   
              
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

export default Foam;