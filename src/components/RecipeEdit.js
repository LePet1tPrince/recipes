import React, { useState, useEffect } from 'react';
import { useRecipeContext } from './AppContext';

export default function RecipeEdit() {
    const { handleRecipeChange, selectedRecipeId, handleRecipeSelect, recipes } = useRecipeContext()
    const [selectedRecipe, setSelectedRecipe] = useState(recipes.find(recipe => recipe.id === selectedRecipeId))

    useEffect(() => {
      setSelectedRecipe(recipes.find(recipe => recipe.id === selectedRecipeId))
}, [selectedRecipeId, recipes])


    function handleChange(changes) {
        handleRecipeChange(selectedRecipeId, { ...selectedRecipe, ...changes })
    }

    
    
  return (
    <div className="recipe-edit__page">
        <div className="d-flex">
        <form className="recipe-edit__form rounded-4">
        <button className="recipe-edit__x-button" onClick={() => handleRecipeSelect(undefined)}>&times;</button>
        <div className="d-flex flex-column p-5">
            <label>Name</label>
            <input type="text" 
            placeholder="Name" 
            className="recipe-edit__form__input" 
            value={selectedRecipe.name} 
            onChange={e => handleChange({ name: e.target.value})}
            ></input>
            <label>CookTime</label>
            <input type="text" 
            placeholder="Cook Time" 
            className="recipe-edit__form__input" 
            value={selectedRecipe.cookTime} 
            onChange={e => handleChange({ cookTime: e.target.value})}
            ></input>
            <label>Servings</label>
            <input type="text" 
            placeholder="Servings" 
            className="recipe-edit__form__input" 
            value={selectedRecipe.servings} 
            onChange={e => handleChange({ servings: e.target.value})}
            ></input>
            <label>Instructions</label>
            <textarea
            placeholder="Instructions"
            className="recipe-edit__form__input"
            value={selectedRecipe.instructions}
            onChange={e => handleChange({instructions: e.target.value})}
            ></textarea>
          <div>
            <div>Name</div>
            <div>Amount</div>

          

           

            </div>
          

            </div>
        </form>

        </div>
    </div>
  )
}
