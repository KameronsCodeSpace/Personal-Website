import React, { Component } from 'react';
import './App.css';

import Landing from './Components/PageSections/Landing'
import Nav from './Components/PageSections/Nav'
import Profile from './Components/PageSections/Profile'
import Projects from './Components/PageSections/Projects'
import Skills from './Components/PageSections/Skills'
// import Acievements from './Components/PageSections/Achievements'
// import Hobbies from './Components/PageSections/Hobbies'
// import Contact from './Components/PageSections/Contact'
import Footer from './Components/PageSections/Footer'



// import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {

    return (
      <div className="App">
        <Nav />
        <Landing />
        <Profile />
        <Projects />
        <Skills />
        {/* <Acievements />
        <Hobbies /> */}
        {/* <Contact /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
