/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import gnomeService from './services/gnomeService';
import Home from './views/Home';
import GnomeDetail from './views/GnomeDetail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Brastlewark: [],
    };
  }

  componentDidMount() {
    gnomeService.getCensus().then(Brastlewark => {
      this.setState({ Brastlewark });
    });
  }

  render() {
    const { Brastlewark } = this.state;
    console.log('TCL: App -> render -> Brastlewark', Brastlewark);
    return (
      <Router>
        <div className="App">
          <h1>Brastlewark Population</h1>
          <Route exact path="/">
            <Home Brastlewark={Brastlewark} />
          </Route>
          <Route exact path="/gnome/:id">
            <GnomeDetail Brastlewark={Brastlewark} />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
