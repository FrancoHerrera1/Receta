import { useEffect, useState } from "react";
import IngredientList from "./IngredientList";
import "./createRecipe.css";
import RecipeSummary from "./RecipeSummary";

//Componentes para crear la receta
const CreateRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [recipeName, setRecipeName] = useState();
  const [recipeItems, setRecipeItems] = useState([]);
  const [recipeScore, setRecipeScore] = useState(0);

//Agrega ingredientes nuevos al arreglo ya existente
  const addItems = (ingrediente) => {
    setRecipeItems((prev) => [...prev, ingrediente]);
  };

 //Crea el recipe y lo guarda al crear la receta 
  const handleSaveRecipe = () => {
    setRecipe({
      name: recipeName,
      ingredients: recipeItems,
      score: recipeScore,
    });
    setRecipeName("");
    setRecipeItems([]);
  };

//Para eliminar la receta del recipe
  const handleDeleteRecipe = () => {
    setRecipeName("");
    setRecipeItems([]);
  };

//Llama a los ingredientes guardados en el localStorage
  const ingredientsList = JSON.parse(localStorage.getItem("ingredients")) || [];

 //Calcula el puntaje nutricional total, basado en los elementos de recipeItems y actualiza el estado. 
  useEffect(() => {
    let puntaje = 0;
    recipeItems.forEach((item) => {
      puntaje += item.puntajeNutricial;
    });
    setRecipeScore(puntaje);
  }, [recipeItems]);

//Guarda la receta en el localStorage cada vez que se actualiza el estado recipe.  
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

      {/*se renderiza el contenido de RecipeSummary para crear la receta*/}
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
        {/*se renderiza el contenido de IngredientList para agregar los ingredientes a la receta*/}
        <IngredientList ingredientsList={ingredientsList} addItems={addItems} />
      </div>
    </div>
  );
};

export default CreateRecipe;
