import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Mix from './img/Mix.png';
import Instagram from './img/Icon-35.png';
import linkedin from './img/Icon-36.png';
import Aves1 from './img/Aves/aves-01.jpg';
import Aves2 from './img/Aves/aves-05-01.jpg';
import Aves3 from './img/Aves/aves-04.jpg';
import Aves4 from './img/Aves/aves_06.jpg';
import Aves5 from './img/Aves/aves-02.jpg';
import Aves6 from './img/Aves/aves-03.jpg';

import back from './img/back-37.png';







class Aves extends React.Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={8}>
        
        <div className="slide-container">
        <Slide>
          <div className="each-slide">
              <img  className="slider" src={Aves1} alt="chiva"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={Aves2} alt="chiva"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={Aves3} alt="chiva"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={Aves4} alt="chiva"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={Aves5} alt="chiva"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={Aves6} alt="chiva"></img>
          </div>
          
         
      
         


        </Slide>
      </div>
  <div>
    <Grid className="dreamy">
      <Cell col={4}>
          <h1>Aves de Bogota</h1>
          <h4>2014</h4>
          <img src={Mix} alt="mix"></img>
      </Cell>
      <Cell col={8}>
        <p>How many of us really know our city, what it is like, how big it is, and who lives in it?
        Bogota is part of the Cunidboyacense plateau and thanks to this location we have more than 30 particular spices from the area. For this reason, I want to make known, not only for people from Bogota but people from abroad, part of the great biodiversity that this city has.
        Birds of Bogota is an illustration graphic project. It is made up of six postcards, in each one there is an illustration of a typical bird from the city of Bogota, Colombia.
        The original illustrations were made in acrylic on cardboard, then digitized and printed.</p><br></br>

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

export default Aves;