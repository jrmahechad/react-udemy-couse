import React from 'react';
import classes from './Logo.css';

import burguerLogo from '../../assests/images/burger-logo.png';

const logo = props => (
  <div className={classes.Logo}>
    <img src={burguerLogo} alt="MyBurger" />
  </div>
);

export default logo;
