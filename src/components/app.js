import React from 'react';
import { Component } from 'react';
import styles from  '../style/main.css';
import Header from './header';
import Main from './main-content';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <div className="footer-copyright">
          <div className="container">
            © 2016 Copyright sunkay all rights reserved
          </div>
        </div>
      </div>
    );
  }
}
