import React, { Component } from 'react';
import Navbar from './components/navbar';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import SignUp from './SignUp';
import CoolButton from './components/CoolButton';



class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SignUp />

      </div>
    );
  }
}

export default App;
