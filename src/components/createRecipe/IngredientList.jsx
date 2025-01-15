import { useState } from "react";
import "./ingredientList.css";

//const para agregar ingredientes de la lista en localStorage a la receta
export const IngredientList = ({ ingredientsList, addItems }) => {
  const [nuevaCantidad, setNuevaCantidad] = useState({});

  const handleInputChange = (id, value) => {
    setNuevaCantidad((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddItem = (ingrediente) => {
    addItems({ ...ingrediente, cantidad: nuevaCantidad[ingrediente.id] || "" });
    setNuevaCantidad((prev) => ({ ...prev, [ingrediente.id]: "" }));
  };

  return (
    <div className="ingredients-container">
      <h2 className="ingredients-basico">Ingredientes Básicos</h2>
      <ul className="ingredients-list">
        {ingredientsList?.map((ingrediente) => {
          return (
            <li key={ingrediente?.id}>
              <label className="label-list" htmlFor={ingrediente?.nombre}>{ingrediente?.nombre}</label>
              <div className="ingredient-list-row" style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="text"
                  placeholder="Cantidad"
                  value={nuevaCantidad[ingrediente.id] || ""}
                  onChange={(e) =>
                    handleInputChange(ingrediente.id, e.target.value)
                  }
                ></input>
                <button className="add-button" onClick={() => handleAddItem(ingrediente)}>
                <i class="material-icons">add_circle</i>
              </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IngredientList;
