import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <u className={classes.NavigationItems}>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </u>
);
export default navigationItems;
