import React from 'react';
import { Grid, Cell} from 'react-mdl';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Editorial from './img/Editorial.png';
import Instagram from './img/Icon-35.png';
import linkedin from './img/Icon-36.png';
import mono1 from './img/mono/1.jpg';
import mono2 from './img/mono/2.jpg';
import mono3 from './img/mono/3.jpg';
import mono4 from './img/mono/4.jpg';
import mono5 from './img/mono/5.jpg';
import mono6 from './img/mono/6.jpg';
import mono7 from './img/mono/7.jpg';
import back from './img/back-37.png';







class Mono extends React.Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={8}>
        
        <div className="slide-container">
        <Slide>
          <div className="each-slide">
              <img  className="slider" src={mono1} alt="mono"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={mono2} alt="mono"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={mono3} alt="mono"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={mono4} alt="mono"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={mono5} alt="mono"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={mono6} alt="mono"></img>
          </div>
          <div className="each-slide">
              <img  className="slider" src={mono7} alt="mono"></img>
          </div>
      
         


        </Slide>
      </div>
  <div>
    <Grid className="dreamy">
      <Cell col={4}>
          <h1>Mono Tematicos</h1>
          <h4>2015</h4>
          <img src={Editorial} alt="Editorial"></img>
      </Cell>
      <Cell col={8}>
        <p>Mono-tematicos is an editorial project composed of three books. Each book talks about the artwork and life of a contemporary artist. Colombian artists Diana Beltran and Alberto Baraya and British artist Rebecca Jewell. Although their artwork is very different, they all have a theme in common: Birds.

        ​Each book is divided into sections, life, artwork, interview, and activity for the lector.
        Their biographies and artwork were taken from their websites and expositions. Layout, activities, and binding were designed by me.</p><br></br>

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

export default Mono;