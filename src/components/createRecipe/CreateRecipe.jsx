import { useEffect, useState } from "react";
import IngredientList from "./IngredientList";
import "./createRecipe.css";
import RecipeSummary from "./RecipeSummary";

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [recipeName, setRecipeName] = useState();
  const [recipeItems, setRecipeItems] = useState([]);
  const [recipeScore, setRecipeScore] = useState(0);

  const addItems = (ingrediente) => {
    console.log("agrego items:", ingrediente);
    setRecipeItems((prev) => [...prev, ingrediente]);
  };

  const handleSaveRecipe = () => {
    setRecipe({
      name: recipeName,
      ingredients: recipeItems,
      score: recipeScore,
    });
    setRecipeName("");
    setRecipeItems([]);
  };

  const handleDeleteRecipe = () => {
    setRecipeName("");
    setRecipeItems([]);
  };

  const ingredientsList = JSON.parse(localStorage.getItem("ingredients")) || [];

  useEffect(() => {
    let puntaje = 0;
    recipeItems.forEach((item) => {
      puntaje += item.puntajeNutricial;
    });
    setRecipeScore(puntaje);
  }, [recipeItems]);

  useEffect(() => {
    if (!recipe) return;
    const existingRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    existingRecipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(existingRecipes));
  }, [recipe]);

  return (
    <div className="Cuerpo-RecipeBu">
      <div className="recipe-body-card">
        <h2 className="CreaTu">¡Crea tu Receta!</h2>

        <RecipeSummary
          recipeName={recipeName}
          recipeItems={recipeItems}
          recipeScore={recipeScore}
          setRecipeItems={setRecipeItems}
          setRecipeName={setRecipeName}
        />

        <div style={{display: "flex", justifyContent: "space-evenly", gap:"2rem"}}>
          <button
            className="shadow-button"
            onClick={handleDeleteRecipe}
          >
            Borrar Receta
          </button>

          <button
            className="shadow-button"
            onClick={handleSaveRecipe}
          >
            Guardar Receta
          </button>
        </div>
      </div>
      <div>
        <IngredientList ingredientsList={ingredientsList} addItems={addItems} />
      </div>
    </div>
  );
};

export default CreateRecipe;
