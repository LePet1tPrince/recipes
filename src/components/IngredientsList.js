import React from 'react'

export default function IngredientsList({ ingredients }) {
    
  return (
    <div >
        <h2>Ingredients</h2>
        {ingredients.map(ingredient => (
            
            <div className="ingredient-list__container" key={ingredient.id}>
            <ul>
                <li className="ingredient__list-item d-flex justify-content-between">
                    <span>{ingredient.amount}</span>
                    <span>{ingredient.name}</span>
                    
                </li>
            </ul>
            </div>
            )
        )}
    </div>
  )
}
