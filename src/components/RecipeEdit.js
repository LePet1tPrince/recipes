import React, { useState, useEffect } from 'react';
import { useRecipeContext } from './AppContext';
import IngredientEdit from './IngredientEdit';
import {v4 as uuidv4 } from 'uuid';

export default function RecipeEdit() {
    const { handleRecipeChange, selectedRecipeId, handleRecipeSelect, recipes } = useRecipeContext()
    const [selectedRecipe, setSelectedRecipe] = useState(recipes.find(recipe => recipe.id === selectedRecipeId))
    // const [ingredientsList, setIngredientsList] = useState(selectedRecipe.ingredients)

    useEffect(() => {
      setSelectedRecipe(recipes.find(recipe => recipe.id === selectedRecipeId))
      // setIngredientsList(recipes.find(recipe => recipe.id === selectedRecipeId).ingredients)
}, [selectedRecipeId, recipes])


    function handleChange(changes) {
        handleRecipeChange(selectedRecipeId, { ...selectedRecipe, ...changes })
    }

    function handleIngredientChange(id, ingredient) {
      const newIngredients = [...selectedRecipe.ingredients]
      const index = newIngredients.findIndex(i => i.id === id)
      newIngredients[index] = ingredient
      console.log(newIngredients[index])
      handleChange({ ingredients: newIngredients })
      console.log(newIngredients)

    }

    function handleIngredientDelete(event, id) {
      event.preventDefault()
      
      handleChange({
        ingredients: selectedRecipe.ingredients.filter(i => i.id !== id)
      })
      // handleRecipeSelect(id)
      // return false
    }

    function handleIngredientAdd(event) {
      event.preventDefault()
      const newIngredient = {
        id: uuidv4(),
        amount: "",
        name: ""
      }
    
      handleChange({
        ingredients: [...selectedRecipe.ingredients, newIngredient]
      })
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
            className="recipe-edit__form__input rounded-3 border-0 px-2 py-1 m-1" 
            value={selectedRecipe.name} 
            onChange={e => handleChange({ name: e.target.value})}
            ></input>
            <label>CookTime</label>
            <input type="text" 
            placeholder="Cook Time" 
            className="recipe-edit__form__input rounded-3 border-0 px-2 py-1 m-1" 
            value={selectedRecipe.cookTime} 
            onChange={e => handleChange({ cookTime: e.target.value})}
            ></input>
            <label>Servings</label>
            <input type="text" 
            placeholder="Servings" 
            className="recipe-edit__form__input rounded-3 border-0 px-2 py-1 m-1" 
            value={selectedRecipe.servings} 
            onChange={e => handleChange({ servings: e.target.value})}
            ></input>
            <label>Instructions</label>
            <textarea
            placeholder="Instructions"
            className="recipe-edit__form__input rounded-3 border-0 px-2 py-1 m-1"
            value={selectedRecipe.instructions}
            onChange={e => handleChange({instructions: e.target.value})}
            ></textarea>
          <div >
            <span className="w-50">Amount</span>
            <span className="w-50">Name</span>

            {selectedRecipe.ingredients.map(ingredient => {
              return(
                <IngredientEdit 
                key={ingredient.id} 
                ingredient={ingredient} 
                handleIngredientChange={handleIngredientChange}
                handleIngredientDelete={handleIngredientDelete}
                />

              )
            })}

        <button className="btn btn-success ingredient-edit__add-btn" onClick={(event) => handleIngredientAdd(event)}>New Ingredient</button>


          

           

            </div>
          

            </div>
        </form>

        </div>
    </div>
  )
}
