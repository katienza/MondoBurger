import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
    return [...Array(props.ingredients[ingKey])].map((_, index) => {
      return <BurgerIngredient key={ingKey + index}  type={ingKey} /> 
    })
  }).reduce((prevArr, currentEle) => { // flatten the array
    return prevArr.concat(currentEle)
  }, [])

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>
  }
  
  return (
    <div className={classes.burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger