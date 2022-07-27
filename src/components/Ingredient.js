import React from 'react';

const Ingredient = ({ingredient, clickFunc, itemKey}) => {
    // I want to render a bg color
    // I want to render the name of the ingr
    // destructuring syntax ( if there is a key with this `name`, extract it)
    // const { key names } = where we're extracting from
    const { name, color } = ingredient
    return (
        <p
            style={{backgroundColor: color}}
            onClick={clickFunc}
            id={itemKey}
        >
            {name}
        </p>
    )
    
}

export default Ingredient