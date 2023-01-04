import React from 'react';
import Recipe from './Recipe';
import { useRecipeContext } from './AppContext';

export default function RecipeList() {
    const { recipes, handleRecipeAdd }  = useRecipeContext()
  return (
    <div className="recipe-list">
        {recipes.map((recipe) => {
            return(
                <Recipe key={recipe.id} {...recipe} />
                

            )
        })}
        <div className="recipe-list__add-recipe-btn-container text-center">
            <button 
            className="btn btn-success mb-5 recipe-list__add-recipe-btn"
            onClick={() => handleRecipeAdd()}
            >
                Add Recipe
            </button>
        </div>
    </div>
  )
}
