/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import gnomeService from './services/gnomeService';
import Home from './views/Home';
import GnomeDetail from './views/GnomeDetail';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offwhite: '#EDEDED',
};

const Logo = styled.h1`
  font-size: 4rem;
  position: fixed;
  z-index: 2;
  transform: skew(-7deg);
  left: 0px;
  right: 0px;
  
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width:1300px) {
    margin:0;
    text-align:center;
  }
  /* background: white;
  color: ${props => props.theme.black}; */
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/src/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.black};
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0 0 5px 0;
  }

`;

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
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div className="App">
            <Logo>
              <Link to="/">Brastlewark</Link>
            </Logo>

            <Route exact path="/">
              <Home Brastlewark={Brastlewark} />
            </Route>
            <Route exact path="/gnome/:id">
              <GnomeDetail Brastlewark={Brastlewark} />
            </Route>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
