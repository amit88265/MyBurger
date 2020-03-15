import React from 'react';
import Aux from '../../../hoc/Auxiliary';


const orderSummary = (props) => {
    console.log("test",props.ingredients);
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(key => {
           
            return <li>{key}:{props.ingredients[key]}</li>
        });
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to check out?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Aux>
    );
}

export default orderSummary;