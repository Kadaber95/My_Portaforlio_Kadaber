import React from 'react';
import { Grid, Cell} from 'react-mdl';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Prototype from './img/Prototype.png';
import Instagram from './img/Icon-35.png';
import linkedin from './img/Icon-36.png';
import upa1 from './img/upa/upa-01.png';
import upa2 from './img/upa/upa-02.jpg';
import back from './img/back-37.png';







class Upa extends React.Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={8}>
        
        <div className="slide-container">
        <Slide>
          <div className="each-slide">
              <img  className="slider" src={upa1} alt="upa"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={upa2} alt="upa"></img>
          </div>
     
        </Slide>
      </div>
  <div>
    <Grid className="dreamy">
      <Cell col={4}>
          <h1>Upa Design</h1>
          <h4>2018</h4>
          <img src={Prototype} alt="prototype"></img>
      </Cell>
      <Cell col={8}>
        <p> Upa is a new design tool that will allow you to draw and illustrate anywhere, anytime.
            It has an On/Off Switch, a microphone and speaker and it comes with its own smart pen.
            Now designing will be easier with UPA </p><br></br>

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

export default Upa;