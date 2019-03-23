import React from 'react';
import LOGO from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <LOGO height="80%" />
    <div className={classes.DesktopOnly}>
      <NavigationItems />
    </div>
  </header>
)

export default Toolbar;