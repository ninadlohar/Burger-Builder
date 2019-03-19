import React from 'react';
import LOGO from '../../Logo/Logo';
import classes from './Toolbar.css';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <LOGO />
    <nav>
      <ul>...</ul>
    </nav>
  </header>
)

export default Toolbar;