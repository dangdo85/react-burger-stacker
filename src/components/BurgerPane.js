import React from 'react';
import Ingredient from './Ingredient';

const BurgerPane = ({stack, clear, remove}) => {

 
// map over all the added burger bits
// still going to use the Ingredient Component
let burgerBits = stack.map((ing, idx) => (
    <li key={idx}>
        <Ingredient 
            itemKey={idx}
            ingredient={ing}
            clickFunc={remove}
        />
    </li>
))
    
    return (
        <section>
            <h3>Burger Pane</h3>
            <ul>
                {burgerBits}
            </ul>
            <button onClick={clear}>
                Clear Burger
            </button>
        </section>
    )
}

export default BurgerPane