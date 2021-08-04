  
import React from 'react';
import DishCard from './DishCard'

const DishContainer = (props) => {
  return(
    <div id="dish-collection">
      {props.dishData.map(dish=> {
    return <DishCard
    dish ={dish}
    key={dish.id}
    delete={props.delete}
    />
      })}
    </div>
      
  )
      
}

export default DishContainer;