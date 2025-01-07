import React, { useState } from "react";
import Home from "./components/home/Home";
import CreateRecipe from "./components/createRecipe/CreateRecipe";
import RecipeBuilder from "./components/createRecipe/RecipeBuilder";
import IngredientList from "./components/createRecipe/IngredientList";
import Footer from "./components/footer/Footer";


const App = () => {
  const [renderPage, setRenderPage] = useState(null)
  return (
    <div>
      <Home navegateToCreateRecipe={()=> setRenderPage('create-recipe')} />
      { renderPage === 'create-recipe' && <CreateRecipe />}
      <RecipeBuilder />
      <IngredientList />
      <Footer />
    </div>
    
  );
};

export default App;
