import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Editorial from './img/Editorial.png';
import Instagram from './img/Icon-35.png';
import linkedin from './img/Icon-36.png';
import chiva1 from './img/Chiva/Render1.jpg';
import chiva2 from './img/Chiva/Render2.jpg';
import chiva3 from './img/Chiva/Render3.jpg';
import chiva4 from './img/Chiva/Render4.jpg';
import chiva5 from './img/Chiva/Render5.jpg';
import chiva6 from './img/Chiva/Render6.jpg';
import chiva7 from './img/Chiva/Render8.jpg';
import chiva8 from './img/Chiva/Render9.jpg';
import chiva9 from './img/Chiva/Render10.jpg';
import back from './img/back-37.png';







class Chiva extends React.Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={8}>
        
        <div className="slide-container">
        <Slide>
          <div className="each-slide">
              <img  className="slider" src={chiva1} alt="chiva"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={chiva2} alt="chiva"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={chiva3} alt="chiva"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={chiva4} alt="chiva"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={chiva5} alt="chiva"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={chiva6} alt="chiva"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={chiva7} alt="chiva"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={chiva8} alt="chiva"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={chiva9} alt="chiva"></img>
          </div>
         
      
         


        </Slide>
      </div>
  <div>
    <Grid className="dreamy">
      <Cell col={4}>
          <h1>La Chiva</h1>
          <h4>2019</h4>
          <img src={Editorial} alt="Editorial"></img>
      </Cell>
      <Cell col={8}>
        <p>La Chiva is a typical latin american bus, use to transport food and people.
            It also has the function of a party bus, music and drinks are on board.
            This is a 3D model of La Chiva</p><br></br>

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

export default Chiva;