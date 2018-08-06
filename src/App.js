import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home'
import About from './components/About'
import MyLinks from './components/MyLinks'
import PersonalProjectsDetail from './components/PersonalProjectsDetail'
import WorkDetail from './components/WorkDetail'
import NotFound from  './components/NotFound'
import Footer from './components/Footer'

class App extends Component {

  render() {
    console.log("Hi there, thanks for visiting www.petemmccarthy.com! :)")
    return (
      <div>

        <div className="details-card box-shadow">
          <About />
          <MyLinks />
        </div>

        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/personal-projects" component={PersonalProjectsDetail} />
            <Route path="/work-experience" component={WorkDetail} />
            <Route component={NotFound} />
          </Switch>
        </Router>

        <Footer />

      </div>
    );
  }
}

export default App;
