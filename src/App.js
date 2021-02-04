import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

export default class App extends Component  {
  render(){
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact/>
          </Switch>  
        </Router>
        
      </div>
    );
  }
  
}
