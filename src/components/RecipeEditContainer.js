import React from 'react';
import { useRecipeContext } from './AppContext';
import RecipeEdit from './RecipeEdit';


export default function RecipeEditContainer() {
    const { selectedRecipeId } = useRecipeContext()

  return (
    <div className="recipe-edit__container">
        {selectedRecipeId && <RecipeEdit/>}

    </div>
  )
}
