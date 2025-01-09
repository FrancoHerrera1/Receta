import { useState } from "react";
import IngredientList from "./IngredientList";
import "./createRecipe.css";

const ingredientes = [
  { id: 1, nombre: "Aceites", cantidad: "", puntajeNutricial: 0 },
  { id: 2, nombre: "Huevos", cantidad: "", puntajeNutricial: 0 },
  { id: 3, nombre: "Arroz", cantidad: "", puntajeNutricial: 0 },
  { id: 4, nombre: "Legumbres", cantidad: "", puntajeNutricial: 0 },
  { id: 5, nombre: "Verduras", cantidad: "", puntajeNutricial: 0 },
  { id: 6, nombre: "Frutas", cantidad: "", puntajeNutricial: 0 },
  { id: 7, nombre: "Carnes", cantidad: "", puntajeNutricial: 0 },
  { id: 8, nombre: "Especias", cantidad: "", puntajeNutricial: 0 },
  { id: 9, nombre: "Sal-Pimienta", cantidad: "", puntajeNutricial: 0 },
  {id: 10, nombre: "Frutos Secos-Semillas", cantidad: "", puntajeNutricial: 0,},
];

const CreateRecipe = () => {
  const [recipeName, setRecipeName] = useState();
  const [recipeItems, setRecipeItems] = useState([]);

  const addItems = (ingrediente) => {
    console.log("agrego items:", ingrediente);
    setRecipeItems( (prev) => [...prev, ingrediente ] );
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
            placeholder="Nombra tu receta..."
            onChange={(e) => setRecipeName(e.target.value)}
          />
          <p>Ingredientes Seleccionados:</p>

          <ul>
            {recipeItems?.map((item) => {
              return (
                <li key={item?.id}>
                  {item.nombre}{' '}
                  {item.cantidad}
                </li>
              );
            })}
          </ul>
        </div>

        <button
          className="save-button btn btn-outline-success"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Guardar Receta
        </button>
      </div>
      <div>
        <IngredientList ingredientes={ingredientes} addItems={addItems} />
      </div>
    </div>
  );
};

export default CreateRecipe;
