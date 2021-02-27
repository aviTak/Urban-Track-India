import React from 'react';
import Navbar from './navbar';
import Devbar from './devbar';
import Javbar from './javbar';
import Head from './header';
import Photo from './photo';
import Story from './story';
import Info from './infographics';
import About from './aboutUs';
import Insight from './insight';
import Testimonial from './testimonial';
import Contact from './contactUs';
import Social from './socialMediaLinks';
import Foot from './footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends React.Component{

  render(){

    return(
      <Router>
        <Switch>
          
          <Route exact path = "/team">     
            <Devbar />
            <main>
              <Head keys = "D5bFRm9nML5gK5gX42Bw" />
              <Testimonial keys = "D4Tz2KjNjjtLf59TS1V4" />
              <Testimonial keys = "qKeR7yncaT9AGOnJKHQO" />
              <Testimonial keys = "BJPPAJ3JSYFuYS6pcLjk" />
              <Contact />
              <Social />
              <Foot />
            </main>
          </Route>
          
          <Route exact path = "/achievements">
            <Javbar />
            <main>
              <Story />
              <Info keys = "J4N6nFMpcQDNDiHIXDXA" />  
              <br />
              <Contact />
              <Social />
              <Foot />
            </main>
          </Route>

          <Route path = "/">
            <Navbar />
            <Photo />
            <main>
              <About />
              <Insight />
              <Testimonial keys = "F7hubXVEU4EjUsc53X9T" />
              <Contact />
              <Social />
              <Foot />
            </main>  
          </Route>    

        </Switch>
      </Router>
    ); 
  }

}

export default App;
