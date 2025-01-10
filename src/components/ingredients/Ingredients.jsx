import { useState } from "react";
import "./ingredients.css"

const Ingredients = ({ ingredientsList, setIngredientsList }) => {
  const [newIngredient, setNewIngredient] = useState({
    nombre: "",
    cantidad: "",
    puntajeNutricial: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addIngredient = () => {
    if (!newIngredient.nombre.trim()) {
      alert("El nombre del ingrediente es obligatorio.");
      return;
    }

    const newId = ingredientsList?.length + 1;
    const ingredientToAdd = {
      id: newId,
      ...newIngredient,
    };

    setIngredientsList((prev) => [...prev, ingredientToAdd]);
    setNewIngredient({ nombre: "", puntajeNutricial: 0 });
  };

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            name="nombre"
            placeholder="Ingrese ingrediente"
            value={newIngredient.nombre}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="puntajeNutricial"
            placeholder="Ingrese valor nutricional"
            value={newIngredient.puntajeNutricial}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={addIngredient}>Agregar</button>
      </div>
      <div>
        <ul>
          {ingredientsList?.map((item) => (
            <li key={item.id}>
              {item.nombre} - {item.puntajeNutricial}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ingredients;
