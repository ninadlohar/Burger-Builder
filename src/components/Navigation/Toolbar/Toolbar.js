import React from "react";
import LOGO from "../../Logo/Logo";
import classes from "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle";

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <LOGO height="80%" />
    <div className={classes.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth} />
    </div>
  </header>
);

export default Toolbar;
