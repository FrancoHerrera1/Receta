import { useState } from "react";
import "./createRecipe.css";

const ingredientes = [
  { id: 1, nombre: "Carne", cantidad: "" },
  { id: 2, nombre: "Sal", cantidad: "" },
  { id: 3, nombre: "Manteca", cantidad: "" },
  { id: 4, nombre: "Huevos", cantidad: "" },
  { id: 5, nombre: "Leche", cantidad: "" },
];

const CreateRecipe = () => {
  const [name, setName] = useState();
  // const [recipe, setRecipe] = useState();

  return (
    <div className="Cuerpo-RecipeBu">
      <h2 className="CreaTu">¡Crea tu Receta!</h2>

      <form id="recipeForm">
        <label htmlFor="recipeName">Nombre de la receta:</label>
        <input
          type="text"
          id="recipeName"
          name="recipeName"
          placeholder="Nombre..."
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="ingredientsList"></label>
        <ul id="ingredientsList"></ul>
        <button
          type="submit"
          className="save-button btn btn-outline-success"
          onClick={() => null}
        >
          Guardar Receta
        </button>
      </form>

      {name && (
        <div className="card">
          <h4>Receta: {name}</h4>
          <p>Ingredientes Seleccionados:</p>
          {}
        </div>
      )}

      <div className="ingredients-container">
        <h2 className="IngreBas">Ingredientes Básicos</h2>
        <ul className="ingredient-list">
          {ingredientes.map((ingrediente) => {
            return (
              <li key={ingrediente?.id}>
                <label htmlFor={ingrediente?.nombre}>
                  {ingrediente?.nombre}
                </label>
                <input type="text"></input>
                <button onClick={() => {}}>Agregar</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CreateRecipe;
