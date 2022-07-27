import React, { useState } from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';

const BurgerStacker = () => {
    const ingredients = [
            {name: 'Kaiser Bun', color: 'saddlebrown'},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'},
            {name: 'Ketchup', color: 'red'},
            {name: 'Mustard', color: 'yellow'},
            {name: 'Mayonaise', color: 'cream'},
          ]
        const [burgerIngredients, setBurgerIngredients] = useState([])

    // add to the burger
    // click on an ingr and use the 'event' to target it
const addToStack = (e) => {
    // grab the color
    const ingColor = e.target.style.backgroundColor
    // grab the name
    const ingName = e.target.innerText
    // add to state
    setBurgerIngredients([
            {name: ingName, color: ingColor}, 
            // spread operator (...) take what's inside the burgerIngredients array and copies it over here
            ...burgerIngredients
    ])
}

    // remover from burger
    const removeFromStack = (e) => {
        // select an ingr by id
        const clickIndex = e.target.id
        // copy the whole burger
        const currBurger = burgerIngredients.slice()
        // remove that ingr
        currBurger.splice(clickIndex, 1)
        // set that state
        setBurgerIngredients({burgerIngredients: currBurger})
    }
    // clear said burger
    const clearBurger = () => {
        // set state back to an empty array
    //     this.setState(() => {
    //         return {
    //             burgerIngredients: []
    //         }
    //     })
    // }
    // render () {
        setBurgerIngredients([])
    }
    return (
        <>
            <IngredientList ingredients={ingredients} add={addToStack}/> 
            <BurgerPane ingredients={burgerIngredients} remove={removeFromStack} clear={clearBurger}/>
        </>
    )   
}



export default BurgerStacker