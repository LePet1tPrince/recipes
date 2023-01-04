import React from 'react'

export default function HeaderCard({ recipe, handleRecipeSelect }) {
  return (
    <div>
    <button className="btn-clear-styles" onClick={() => handleRecipeSelect(recipe.id)}>
    <div className="card header-card bg-light">
        <div className="card-body">
            <h5 className="card-title">{recipe.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{recipe.cookTime}</h6>
        </div>

    </div>
    </button>
    </div>
  )
}
