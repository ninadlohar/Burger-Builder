import React from 'react';
import classes from './Logo.css';
import LogoImage from '../../assets/burger-logo.png';

const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={LogoImage} alt="logo" />
  </div>
)

export default Logo;