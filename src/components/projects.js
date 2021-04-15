import React from 'react';
import { Grid, Cell, Tab, Tabs} from 'react-mdl';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import Prototype from './img/Prototype.png';
import Instagram from './img/Icon-35.png';
import linkedin from './img/Icon-36.png';
import Graphic from './img/Graphic.png';
import Mix from './img/Mix.png';
import Editorial from './img/Editorial.png';
import All from './img/all-13.png';
import Dreamy from './img/Dreamy.jpg';
import Chiva from './img/Chiva.jpg';
import Foam from './img/Foam.png';
import Mono from './img/Mono.jpg';
import Sweet from './img/Sweet.png';
import Upa from './img/Upa.png';
import Waya from './img/WayA.jpg';
import Aves from './img/aves-01.jpg';






class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    
    toggleCategories()
    {
     if(this.state.activeTab === 0){
       return(
        <section id='mywork'> 
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
    </section>
       )
    }else if (this.state.activeTab === 1){
      return(
        <div className="gallery">
        <Link to="Foam">
            <img  className="projects" src={Foam} alt="foam"></img></Link>
        <Link to="Upa">
            <img  className="projects" src={Upa} alt="upa"></img></Link>
  </div>
      )
  } else if (this.state.activeTab === 2){
        return(
            <div className="gallery">    
            <Link to="Mono">
                <img  className="projects" src={Mono} alt="mono"></img></Link>   
            </div>
        )
    } else if (this.state.activeTab === 3){
        return(
          <section>
            <div className="gallery">
                <Link to="Dreamy">
              <img  className="projects" src={Dreamy} alt="dreamy"></img></Link>
           <Link to="Sweet">
              <img  className="projects" src={Sweet} alt="sweet"></img></Link>
              
    </div>
    <div clasName="gallery"><Link to="Waya">
    <img  className="projects" src={Waya} alt="waya"></img></Link></div>
    </section>
        )
    }else if (this.state.activeTab === 4)
        return(
            <div className="gallery">
            <Link to="Chiva">
              <img  className="projects" src={Chiva} alt="chiva"></img></Link>
              <Link to="Aves">
              <img  className="projects" src={Aves} alt="aves"></img></Link>  
              </div>
        )
    }
  render() {
    return(
      <div style={{width: '100%', margin: 'auto',height: '100%'}}>
      <Grid className="landing-grid">
        <Cell col={8}>

        <div>
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab> <img  className="my_work" src={All} alt="graphic" ></img></Tab>
              <Tab> <img  className="my_work" src={Graphic} alt="graphic" ></img></Tab>
              <Tab> <img  className="my_work" src={Editorial}alt="editorial"></img></Tab>
              <Tab><img  className="my_work" src={Prototype} alt="prototype"></img></Tab>
              <Tab><img  className="my_work" src={Mix} alt="mix"></img></Tab>
           </Tabs>
          
      </div>  
      <div className="gallery">
         <section>
           <div className="content">{this.toggleCategories()}</div>
         </section>
           
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

export default Projects;