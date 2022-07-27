import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = (props) => {
    
    // map over the ingr
    // mapped over and created from Ingredient Component
    let allIngredients = props.ingredients.map((ing, idx) => (
        <li key={idx}>
            <Ingredient 
                ingredient={ing}
                clickFunc={(e) => props.add(e)}
                itemKey={idx}
            />
        </li>
    ))
    return (
        <>
        <section>
            <h3>Ingredients list</h3>
            <ul>
                {allIngredients}
            </ul>
        </section>
        </>
    )
}

export default IngredientList