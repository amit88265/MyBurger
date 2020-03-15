import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {
    console.log("test", props.ingredients);
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
            <p><strong>Total price :{props.totalPrice}</strong> </p>
            <p>Continue to check out?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;