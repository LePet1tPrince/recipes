import React from 'react';
import HeaderCard from './HeaderCard';
import { useRecipeContext } from './AppContext';

export default function Header() {
    const { recipes, handleRecipeSelect } = useRecipeContext()

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-success bg-success w-50 ">
  <a className="navbar-brand px-3" href="#">Recipe App</a>
  <div className="d-flex flex-row overflow-scroll">
  {recipes.map(recipe => (
         <div>
            <HeaderCard
            key={recipe.id}
            recipe={recipe}
            handleRecipeSelect={handleRecipeSelect}
        
            />
        </div>
        ))}
  </div>
 


    <form className="form-inline my-2 my-lg-0 px-3">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</nav>
       
    </div>
  )
}
