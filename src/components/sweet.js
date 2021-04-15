import React from 'react';
import { Grid, Cell} from 'react-mdl';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Prototype from './img/Prototype.png';
import Instagram from './img/Icon-35.png';
import linkedin from './img/Icon-36.png';
import sweet1 from './img/sweet/sweet-01.jpg';
import sweet2 from './img/sweet/sweet-02.png';
import sweet3 from './img/sweet/sweet-03.png';
import back from './img/back-37.png';







class Sweet extends React.Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={8}>
        
        <div className="slide-container">
        <Slide>
          <div className="each-slide">
              <img  className="slider" src={sweet1} alt="sweet"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={sweet2} alt="sweet"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={sweet3} alt="sweet"></img>
          </div>
       
          

        </Slide>
      </div>
  <div>
    <Grid className="dreamy">
      <Cell col={4}>
          <h1>Sweet</h1>
          <h4>2020</h4>
          <img src={Prototype} alt="prototype"></img>
      </Cell>
      <Cell col={8}>
        <p>Sweet AR is a concept for an application built in Unity. Incorporating Augmented reality into the food industry. Through the app, the user will be able to visualize what they want to order in advance, in this case in a Milkshake Restaurant.

        The app will allow the customer to customize their order, and add items to the cart to then place a full order, the preparation process and estimated time for it to be ready will be displayed on the screen. This technology will attract more customers, curious customers, to the restaurant.

        This Application is developed in Unity by using an image target as the main component, after the reading of the target a 3D model of the item selected will appear on the screen with the options of adding and changing toppings. </p><br></br>

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

export default Sweet;