import React from 'react';
import classes from './Sidedrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Modal from '../../UI/Modal/Modal';
import Aux from '../../../hoc/aux';

const Sidedrawer = (props) => {
  let attachedClasses = [classes.Sidedrawer, classes.Close]
  if (props.open) {
    attachedClasses = [classes.Sidedrawer, classes.Open]
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <Modal />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default Sidedrawer;