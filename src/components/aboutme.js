import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Karen from './img/karen1.jpg';
import Pencil from './img/pencil.png';
import Bulb from './img/bulb.png';
import Book from './img/book.png';
import Compass from './img/compass.png';
import Cut from './img/cut.png';
import Brush from './img/brush.png';
import Camera from './img/camera.png';
import Skills from './img/skills.png';
import Instagram from './img/Icon-35.png';
import linkedin from './img/Icon-36.png';
import card from './img/Contact-39.png';
import logocard from './img/Contact-40.png';
import name from './img/contact_link-21.png';
import mail from './img/contact_link-22.png';
import linkin from './img/contact_link-23.png';
import insta from './img/contact_link-24.png';
import tel from './img/contact_link-25.png';


class About extends React.Component {
  render() {
    return(
<div>  
    <div className="img_about">
      <img  className="my_pic" src={Karen} alt="logo"></img>
   
    </div>
    <div className="dots">
        <img  src={Brush} alt="logo"></img>
        <img  src={Camera} alt="logo"></img>
        <img  src={Cut} alt="logo"></img>
        <img  src={Pencil} alt="logo"></img>
        <img  src={Book} alt="logo"></img>
        <img  src={Bulb} alt="logo"></img>
        <img  src={Compass} alt="logo"></img>
    
    </div>
    <div className="about">
      <h1>About me</h1>
      <Grid>
      <Cell col={2}>
    </Cell>
    <Cell col={8}>
    
      <p>I have always striven to live a life filled with art and design. Each detail matters when designing, and as such, I always place a keen focus on ensuring that all details are covered and that all work is completed with the highest possible standard of quality. Besides creativity, I would consider my strong work ethic and organizational skills to be amongst my best qualities. These strengths have been invaluable throughout my time in the Interaction Design and Development program. By leveraging my strengths, I have been able to complete all tasks and objectives efficiently and on time. I love helping other people and being a team player, and those who know me have characterized me as enthusiastic, cooperative, and trustworthy.


      </p>
      </Cell>

      <Cell col={2}>
    </Cell>

      </Grid>
    </div>

  <div className="skills">
   <h1>Skills</h1>
    <Grid >
    <Cell col={2}>
    </Cell>
  
      <Cell col={5} >
     <p>
      • Strong communication skills (EN - ES)<br></br>
      • Deep team and project management skills, <br></br>with proven management experience <br></br>
      • Strong customer service and client satisfaction<br></br>
      • Problem-solving and budget management<br></br>
      • High leadership and team player<br></br>
      • Excellent at meeting deadlines and reaching goals <br></br>
      • Good in planning and coordinating projects <br></br>
      </p>
        <div className="color_dots">
            <img  src={Brush} alt="logo"></img>
            <img  src={Camera} alt="logo"></img>
            <img  src={Cut} alt="logo"></img>
            <img  src={Pencil} alt="logo"></img>
        </div>

      </Cell>

      <Cell col={3}>
        <div className="rates">
          <img  src={Skills} alt="skills"></img>
        </div>

      </Cell>
   
    </Grid>
    </div>   
    
   <div className="experience" >
      <Grid>
      <Cell col={2}>
      </Cell>
      <Cell className="exp" col={4}>
        <div>
          <h1>Experience</h1>
          <p>
          <h2>Innato Coffee and Innato Studio |</h2>
          <h4>Dec. 2015 - August 2018</h4>

        - Design and artistic skills<br></br>
        * Creation and design of advertising and <br></br>graphic pieces <br></br> 
        * Layout of documents and datasheets in order to <br></br>show the properties of the products to customers. <br></br>

        <h2>Freelance Graphic Designer |</h2>
        <h4> 2014 - Present </h4>
        * Modos Impresos (Multiple customers)<br></br>
        * Rocas & Materiales S.A.S  (Logo design, POP and Web Page)<br></br>
        * Helicsa LTDA (Photography and Web Page)<br></br>
        * Saga Consulting T.I. (Logo and web design)<br></br>
        * Glowlistica ( Logo and POP design)<br></br>
        * With every company I worked I had direct <br></br>contact with the customer, providing great customer service listening to their expectations, and going <br></br>above and beyond them.     
        </p>
        </div>
      </Cell>
      <Cell className="education"col={4}>
      <h1>Education</h1>
      <h2>• George Brown College - Canada|</h2>
      <h4>In Progress </h4>
      <p>Interaction Design and Development Diploma </p>

       <h2> • George Brown College - Canada| </h2>
       <h4>2019</h4>
        <p>Digital Arts certificate</p>

      <h2>• Javeriana University - Colombia| </h2>
      <h4>Transferred </h4>
      <p>Bachelor in Visual Arts Double emphasis in Graphic and Plastic</p>

      <h1>Volunteering</h1>
      <h2>Mision Pais Colombia, Communications|  </h2>
        <h4>Aug. 2016 - Mar. 2017 </h4>
        <p>- Graphic designer, creating advertising</p>
        <p>- Social media management   </p>

    



      </Cell>
    
      
      


      </Grid>
      </div>

      <div className="contact1">
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


      <div className="footer">

            <div><p>©2020 Al rights reserved to @Kadaber</p></div>

             <div> 
                   <a href="https://www.instagram.com/kadaber.and/" >
                      <img  className="social" src={Instagram} alt="logo"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/karen-bernal-32b60771/" >
                      <img  className="social" src={linkedin} alt="logo"></img>
                    </a>
            
            </div> 
          </div>
</div>  


    )
  }
}

export default About;