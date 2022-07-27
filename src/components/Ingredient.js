import React from 'react';

const Ingredient = (props) => {
    // I want to render a bg color
    // I want to render the name of the ingr
    // destructuring syntax ( if there is a key with this `name`, extract it)
    // const { key names } = where we're extracting from
    const { name, color } = props.ingredient
    return (
        <p
            style={{backgroundColor: color}}
            onClick={props.clickFunc}
            id={props.itemKey}
        >
            {name}
        </p>
    )
    
}

export default Ingredient