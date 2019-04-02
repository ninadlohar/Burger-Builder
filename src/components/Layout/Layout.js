import React from "react";
import Aux from "../../hoc/aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";
import { connect } from "react-redux";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    sideDrawerClosed: true
  };
  sideDrawerClosedHandler = () => {
    this.setState({ sideDrawerClosed: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { sideDrawerClosed: !prevState.sideDrawerClosed };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <Sidedrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.sideDrawerClosed}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
