import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        price: 2,
        purchasable: false
    };

    updatePurchasable = (ingredients) => {
        const newIngredients = {
            ...ingredients
        };
        const sum = Object.keys(newIngredients)
            .map(e => newIngredients[e])
            .reduce((a, b) => a + b, 0);
        this.setState({ purchasable: sum > 0 });
    }


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const updatedPrice = this.state.price + INGREDIENTS_PRICES[type];
        this.setState({ price: updatedPrice, ingredients: updatedIngredients });
        this.updatePurchasable(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        if (oldCount <= 0)
            return;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const updatedPrice = this.state.price - INGREDIENTS_PRICES[type];
        this.setState({ price: updatedPrice, ingredients: updatedIngredients });
        this.updatePurchasable(updatedIngredients);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls price={this.state.price} ingredientsAdded={this.addIngredientHandler}
                    ingredientsRemoved={this.removeIngredientHandler} disable={disabledInfo}
                    purchasable={this.state.purchasable}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
