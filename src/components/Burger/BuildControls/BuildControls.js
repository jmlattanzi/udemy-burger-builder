import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            { 
                controls.map(ctrl => {
                    return <BuildControl 
                        added={() => props.ingredientAdded(ctrl.type)} //sends the type as a param to addIngredientHandler
                        removed={() => props.ingredientRemoved(ctrl.type)} //sends the type as a param to removeIngredientHandler
                        disabled={props.disabled[ctrl.type]}
                        key={ctrl.label} 
                        label={ctrl.label}/>
                })
            }
            <button 
                className={classes.OrderButton} 
                disabled={!props.purchasable} 
                onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN IN TO ORDER'}</button>
        </div>
    );
}

export default buildControls;