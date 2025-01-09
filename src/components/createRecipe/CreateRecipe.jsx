import { useState } from "react";
import IngredientList from "./IngredientList";
import "./createRecipe.css";

const CreateRecipe = ({ ingredientsList }) => {
  const [recipe, setRecipe] = useState({});
  const [recipeName, setRecipeName] = useState();
  const [recipeItems, setRecipeItems] = useState([]);

  const addItems = (ingrediente) => {
    console.log("agrego items:", ingrediente);
    setRecipeItems((prev) => [...prev, ingrediente]);
  };

  const handleSaveRecipe = () => {
    setRecipe({
      name: recipeName,
      ingredients: recipeItems,
    });
    setRecipeName("");
    setRecipeItems([]);
  };

  const handleDeleteRecipe = () => {
    setRecipeName("");
    setRecipeItems([]);
  };

  return (
    <div className="Cuerpo-RecipeBu">
      <div>
        <h2 className="CreaTu">¡Crea tu Receta!</h2>

        <div className="card">
          <input
            type="text"
            id="recipeName"
            name="recipeName"
            value={recipeName}
            placeholder="Nombra tu receta..."
            onChange={(e) => setRecipeName(e.target.value)}
          />
          <p>Ingredientes Seleccionados:</p>

          <ul>
            {recipeItems?.map((item) => {
              return (
                <div key={item?.id}>
                  <li>
                    {item.nombre} {item.cantidad}
                  </li>

                  <button
                    onClick={() =>
                      setRecipeItems((prev) =>
                        prev.filter((recipeItem) => recipeItem?.id !== item?.id)
                      )
                    }
                  >
                    Borrar
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
        <div>
          <button
            className="save-button btn btn-outline-success"
            onClick={handleDeleteRecipe}
          >
            Borrar Receta
          </button>

          <button
            className="save-button btn btn-outline-success"
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
