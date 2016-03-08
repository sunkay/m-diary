import React from 'react';
import { Component } from 'react';
import styles from  '../style/style.css';
import Header from './header';
import Main from './main-content';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>React simple starter</div>
        <Main />
      </div>
    );
  }
}
