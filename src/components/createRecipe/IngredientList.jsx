import { useState } from "react";
import "./ingredientList.css";

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
              <label htmlFor={ingrediente?.nombre}>{ingrediente?.nombre}</label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <input
                  type="text"
                  placeholder="Cantidad"
                  value={nuevaCantidad[ingrediente.id] || ""}
                  onChange={(e) =>
                    handleInputChange(ingrediente.id, e.target.value)
                  }
                ></input>
                <p>unidad</p>
              </div>
              <button onClick={() => handleAddItem(ingrediente)}>
                Agregar
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IngredientList;
