import React from 'react';
import {Footer, FooterSection, FooterLinkList} from 'react-mdl';

class Footer extends React.Component{
    render(){
        return(
<Footer size="mini">
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
</Footer>

        )
    }
}

export default Footer;
