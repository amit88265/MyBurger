import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
];

const buildControls = (props) => {

    return (<div className={classes.BuildControls}>
        <p>Total price is : {props.price.toFixed(2)}</p>
        {
            controls.map((control, index) => {
                return <BuildControl key={control.label}
                    label={control.label} added={() => props.ingredientsAdded(control.type)}
                    removed={() => props.ingredientsRemoved(control.type)}
                    disable={props.disable[control.type]} />
            })
        }
        <button disabled={!props.purchasable}>ORDER NOW</button>

    </div>
    );
}
export default buildControls;