import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Routerconfig from './router/Routerconfig';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NewsApp extends Component {
  render() {
    return (
      <Router>
      <div className="NewsApp">
          <Navigation />
          <Routerconfig />
          <Footer />
      </div>
      </Router>
    );
  }
}

export default NewsApp;
