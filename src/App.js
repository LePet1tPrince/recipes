import React from 'react';
import RecipeList from './components/RecipeList';
import './css/app.css';
import AppContext from './components/AppContext';
import RecipeEditContainer from './components/RecipeEditContainer';




function App() {

  
  return (
    <AppContext>
    <RecipeList/>
    <RecipeEditContainer/>
    </AppContext>
  );
}



export default App;
