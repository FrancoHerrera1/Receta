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

  return (
    <div style={{ display: "flex", height: "600px", justifyContent: "center" }}>
      {recipes?.map((recipe, index) => {
        return (
          <RecipeCard
            key={index}
            recipe={recipe}
            onDelete={() => handleDeleteRecipe(recipe)}
          />
        );
      })}
    </div>
  );
};

export default RecipeHistory;
