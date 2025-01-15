import { useState, useEffect } from "react";
import "./ingredients.css"
import ImgIngredients1 from "../imagenes/Ingredientes2.jpg"
import ImgChef from "../imagenes/Chef.jpg"


//Agregar nuevos ingredientes a la lista
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

  //Con el If se obliga al usuario darle un name al ingrediente para agregarlo
  const addIngredient = () => {
    if (!newIngredient.nombre.trim()) {
      alert("El nombre del ingrediente es obligatorio.");
      return;
    }
   
  //El nuevo ingrediente se agrega en la posición +1 del arreglo existente
    const newId = ingredientsList?.length + 1;
    const ingredientToAdd = {
      id: newId,
      ...newIngredient,
    };
    
    //Funcion para guardar ingredientes custom en localStorage
    const existingIngredients = JSON.parse(localStorage.getItem("ingredients")) || [];
    existingIngredients.push(ingredientToAdd);
    localStorage.setItem("ingredients", JSON.stringify(existingIngredients));

    setIngredientsList((prev) => [...prev, ingredientToAdd]);
    setNewIngredient({ nombre: "", puntajeNutricial: 0 });
  };

  return (
    <div className="ingredients-page-container">
      <div className="ingredients-page-card">
        <div>
          <h2>¡Agrega tus Ingredientes!</h2>
          <div style={{marginTop: "10px"}}>
          <input style={{width: "250px", marginRight: "15px"}}
            type="text"
            name="nombre"
            placeholder="Ingrese Ingrediente"
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
        </div>
        <button onClick={addIngredient}>Agregar</button>
        <ul className="ingredients-page-list">
          {ingredientsList?.map((item) => (
            <li key={item.id}>
              {item.nombre} - {item.puntajeNutricial}
            </li>
          ))}
        </ul>
      </div>
      <div style={{display:"flex", flexDirection:"column", width: "20%"}}>
        <div><img src={ImgIngredients1} alt="Img Ingredients1" /></div>
        <div style={{display:"flex", justifyContent:"flex-end", marginTop:"30px", marginBottom:"30px"}}><img src={ImgChef} alt="Img Chef" /></div>   
      </div>
    </div>
  );
};

export default Ingredients;
