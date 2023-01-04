import React, { useState, useEffect, useContext } from 'react';
import { sampleRecipes } from './sampleRecipes';
import {v4 as uuidv4 } from 'uuid';

const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'recipeRemake.App.recipes'

export function useRecipeContext() {
  return useContext(RecipeContext)
}

export default function AppContext({children}) {
  // const [selectedRecipe, setSelectedRecipe] = useState()
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  


  const [recipes, setRecipes] = useState(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON !== null) {
      return JSON.parse(recipeJSON)
    } else {
      return sampleRecipes
    }

  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
    

  }, [selectedRecipeId, recipes])





 

  function handleRecipeSelect(id) {
    const myid = recipes.find(recipe => recipe.id === id).id
    console.log(recipes.find(recipe => recipe.id === myid))
    setSelectedRecipeId(recipes.find(recipe => recipe.id === id).id)

  };

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
    // setSelectedRecipe(id)
    // console.log(recipes)
  };

  function handleRecipeAdd() {
    const sampleRecipe = {
      id: uuidv4(),
      name: "",
      cookTime: "",
      servings: 1,
      instructions: "",
      ingredients: [
        {
        id: uuidv4(),
        name: "",
        amount: ""
      },
      {
        id: uuidv4(),
        name: "",
        amount: ""
      }
    ]
    }
    setRecipes([...recipes, sampleRecipe])
    setSelectedRecipeId(sampleRecipe.id)
  }

  function handleRecipeDelete(id) {
    const newRecipes = recipes.filter(r => r.id !== id)
    setRecipes(newRecipes)
  }


  

  const recipeContextValue = {
    recipes,
    selectedRecipeId,
    setSelectedRecipeId,
    handleRecipeSelect,
    handleRecipeChange,
    handleRecipeAdd,
    handleRecipeDelete,

  };
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      {children}
    </RecipeContext.Provider>
  )
}
