import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Nav , Navbar , NavItem } from 'react-bootstrap';
// import {Jumbotron , Button} from 'react-bootstrap'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import EngineeringTeams from './pages/EngineeringTeams';
import Tools from './pages/Tools';
import OperationsTeam from './pages/OperationsTeam';


class App extends Component {
  render() {
    return (

      <Router>
        {/* <div> */}
          <div>
            {/* <h1> inside router</h1> */}
            <Route exact path="/" component={Home} />
            <Route path = "/home" component={Home} />
            <Route path = "/service" component={Services} />
            <Route path = "/engineeringTeams" component={EngineeringTeams} />
            <Route path = "/operationsTeam" component={OperationsTeam} />
            <Route path = "/tools" component={Tools} />
            {/* <h1>after route performed </h1> */}
          </div>

          {/* <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div> */}
        {/* </div> */}
      </Router>
      
    );
  }
}

export default App;
