import React from 'react'

export default function IngredientEdit(props) {

    const { ingredient,
    handleIngredientChange,
    handleIngredientDelete,
    } = props;

    function handleChange(changes) {
        handleIngredientChange(ingredient.id, {...ingredient, ...changes})
        

    };



  return (
    <div>
        <div className="ingredient-edit__container">
        <input className="ingredient-edit__input rounded-3 border-0 px-2 py-1 m-1" onChange={e => handleChange({amount: e.target.value})} value={ingredient.amount}></input>
        <input className="ingredient-edit__input rounded-3 border-0 px-2 py-1 m-1" onChange={e => handleChange({name: e.target.value})} value={ingredient.name}></input>
        <button className="btn bg-none text-danger delete-ingredient-button" onClick={(event) => handleIngredientDelete(event, ingredient.id)}>&times;</button>
        </div>


    </div>
  )
}
