import React from 'react'
import "./createRecipe.css";

const CreateRecipe = () => {
  return (
    <div className='Cuerpo-RecipeBu'>
      <h2 class="CreaTu">¡Crea tu Receta!</h2>

      <form id="recipeForm">
      <label for="recipeName">Nombre de la receta:</label>
      <input type="text" id="recipeName" name="recipeName" placeholder='Nombre...'/>

      <label for="ingredientsList"></label>
        <ul id="ingredientsList">
        </ul>
      <button type="submit" class="save-button btn btn-outline-success">Guardar Receta</button>
      </form>
      
      <div class="ingredients-container">
      <h2 class="IngreBas">Ingredientes Básicos</h2>
      <ul>
        <li>Harina <button onclick="addIngredient('Harina')" class="btn btn-outline-success">Agregar</button></li>
        <li>Azúcar <button onclick="addIngredient('Azúcar')" class="btn btn-outline-success">Agregar</button></li>
        <li>Huevos <button onclick="addIngredient('Huevos')" class="btn btn-outline-success">Agregar</button></li>
        <li>Leche <button onclick="addIngredient('Leche')" class="btn btn-outline-success">Agregar</button></li>
        <li>Manteca <button onclick="addIngredient('Manteca')" class="btn btn-outline-success">Agregar</button></li>
      </ul>
      </div>
      
    </div>
  );
};

export default CreateRecipe;