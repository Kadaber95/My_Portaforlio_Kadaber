import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';

import Projects from './projects';
import Resume from './resume';
import Dreamy from './dreamy';
import Foam from './foam';
import Sweet from './sweet';
import Mono from './mono';
import Upa from './upa';
import Chiva from'./chiva';
import Aves from './aves';
import Waya from './waya';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/landingpage" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    {/* <Route path="/contact" component={ContactForm} /> */}
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/dreamy" component={Dreamy} />
    <Route path="/foam" component={Foam} />
    <Route path="/sweet" component={Sweet} />
    <Route path="/mono" component={Mono} />
    <Route path="/upa" component={Upa} />
    <Route path="/chiva" component={Chiva} />
    <Route path="/aves" component={Aves} />
    <Route path="/waya" component={Waya} />
  </Switch>
)

export default Main;