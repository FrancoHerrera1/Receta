import { useState } from "react";
import CreateRecipe from "./components/createRecipe/CreateRecipe";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Ingredients from "./components/ingredients/Ingredients";
import "./App.css";

import logo from "./components/imagenes/PolloLogo.png";
import RecipeHistory from "./components/recipeHistory/RecipeHistory";

const baseIngredientsList = [
  { id: 1, nombre: "Aceites", cantidad: "", puntajeNutricial: 135 },
  { id: 2, nombre: "Huevos", cantidad: "", puntajeNutricial: 84 },
  { id: 3, nombre: "Arroz", cantidad: "", puntajeNutricial: 351 },
  { id: 4, nombre: "Legumbres", cantidad: "", puntajeNutricial: 23 },
  { id: 5, nombre: "Verduras", cantidad: "", puntajeNutricial: 55 },
];

const App = () => {
  const [renderPage, setRenderPage] = useState("home");
  const [ingredientsList, setIngredientsList] = useState(baseIngredientsList);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: '0 3rem' }}>
          <h2>AlHorno.com</h2>{" "}
          <img className="Logo" src={logo} alt="Logo de Al Horno.com" />
        </div>
        <div className="NavBar">
          <ul className="Lista">
            <li onClick={() => setRenderPage("home")}>
              <a>Home</a>
            </li>
            <li onClick={() => setRenderPage("create-recipe")}>
              <a>Crear Recetas</a>
            </li>
            <li onClick={() => setRenderPage("ingredients")}>
              <a>Ingredientes</a>
            </li>
            <li onClick={() => setRenderPage("recipe-history")}>
              <a>Mis Recetas</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">
        {renderPage === "home" && (
          <Home navegateToCreateRecipe={() => setRenderPage("create-recipe")} />
        )}
        {renderPage === "create-recipe" && (
          <CreateRecipe ingredientsList={ingredientsList} />
        )}
        {renderPage === "ingredients" && (
          <Ingredients
            ingredientsList={ingredientsList}
            setIngredientsList={setIngredientsList}
          />
        )}
        {renderPage === "recipe-history" && <RecipeHistory />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
