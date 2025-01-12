import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";


const RecipeHistory = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(existingRecipes);
  }, []);

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
    <div style={{ display: "flex", height: "600px", justifyContent: "center" }}>
      {recipes.length > 0 ? (recipes?.map((recipe, index) => {
        return (
          <div>
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
  );
};

export default RecipeHistory;
