import React from "react";
import Aux from "../../hoc/aux";
import classes from "./Layout.css";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';

class Layout extends React.Component {
  constructor(props) { super(props) }
  state = {
    sideDrawerClosed: true
  }
  sideDrawerClosedHandler = () => {
    this.setState({ sideDrawerClosed: false })
  }
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerClosed: !prevState.sideDrawerClosed }
    })
  }
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <Sidedrawer
          open={this.state.sideDrawerClosed}
          closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    )
  }
}

export default Layout;
