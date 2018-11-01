import React from 'react';
import Aux from '../../hoc/Auxiliar';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = props => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main className={classes.content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
