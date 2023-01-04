import React from 'react';
import RecipeList from './components/RecipeList';
import './css/app.css';
import AppContext from './components/AppContext';
import RecipeEditContainer from './components/RecipeEditContainer';
import Header from './components/Header';




function App() {

  
  return (
    <AppContext>
      <Header/>
    <RecipeList/>
    <RecipeEditContainer/>
    </AppContext>
  );
}



export default App;
