import React from 'react';

import burger_logo from '../../assests/images/burger_logo.png';

import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={burger_logo} />
        </div>
    );
}

export default logo;