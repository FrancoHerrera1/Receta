import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import "./recipeHistory.css"


const RecipeHistory = () => {
  const [recipes, setRecipes] = useState([]);

//Se trae las recetas guardadas en el localStorage a Recipes  
  useEffect(() => {
    const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(existingRecipes);
  }, []);

//Para borrar las recetas guardadas en el localStorage  
  const handleDeleteRecipe = (recipe) => {
    const newRecipes = recipes.filter((r) => r.name !== recipe.name);
    setRecipes(newRecipes);
    localStorage.setItem("recipes", JSON.stringify(newRecipes));
  };

  const cardDefault = {
    name: "Omelette",
    ingredients: [{"id":1,"nombre":"Huevos","2":"","puntajeNutricial":168},{"id":2,"nombre":"Sal","cantidad":"A gusto","puntajeNutricial":12}, {"id":3,"nombre":"Aceites","cantidad":"100 ml","puntajeNutricial":135}, {"id":4,"nombre":"Queso","cantidad":"150 grs","puntajeNutricial":524}],
    score: 839,
  }; 

  return (
    <div style={{ display: "flex", flexDirection:"column", height:"100%"}}>
      <div className="title-cards">
        <h2>¡Estas son todas tus Recetas!</h2>
        <p>Aquí podras encontrar diferentes tarjetas con todas tus recetas guardadas...</p>
      </div>
      <div className="my-cards">
      {recipes.length > 0 ? (recipes?.map((recipe, index) => {
        return (
          <div>
          {/*se renderiza el RecipeCard con la card de la receta guardada en el localStorage*/}  
            <RecipeCard
            key={index}
            recipe={recipe}
            onDelete={() => handleDeleteRecipe(recipe)}
          />
          </div>
        );
      })) : (<RecipeCard
            recipe={cardDefault}
            key="default"
          />)}
    </div>
    </div>
  );
};

export default RecipeHistory;
