import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button onClick={props.added} className={classes.More}>add</button>
        <button  disabled={props.disable} onClick={props.removed} className={classes.Less}>subtract</button>
    </div>
);

export default buildControl;