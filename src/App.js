import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Logo from '/Users/karenbernal/Desktop/George Brown C/IDD/SEM6/02-Device Development II/my_portfolio/src/components/img/Logo.png';


class App extends React.Component {
    render() {
      return (
        <div className="demo-big-content">
      <Layout>
          <Header className="header" 
                title={<Link 
                to="/"><img className="logo" src={Logo} alt="logo"></img></Link>} 
                scroll>
                
                
              <Navigation>
                <Link to="/aboutme">About Me</Link>
                {/* <AnchorLink href='#mywork'>My Work</AnchorLink>  */}
                 <Link to="/projects">My Work</Link>
                {/* <Link to="/contact">Contact</Link> */}
                

                
              </Navigation>
          </Header>
          
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
  
      );
    }
  }
  
  
  export default App;

  /*https://www.npmjs.com/package/react-anchor-link-smooth-scroll*/
  