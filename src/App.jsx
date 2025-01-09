import { useState } from "react";
import CreateRecipe from "./components/createRecipe/CreateRecipe";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Ingredients from "./components/ingredients/Ingredients";
import "./App.css";

import logo from "./components/imagenes/PolloLogo.png";

const ingredientsList = [
  { id: 1, nombre: "Aceites", cantidad: "", puntajeNutricial: 0 },
  { id: 2, nombre: "Huevos", cantidad: "", puntajeNutricial: 0 },
  { id: 3, nombre: "Arroz", cantidad: "", puntajeNutricial: 0 },
  { id: 4, nombre: "Legumbres", cantidad: "", puntajeNutricial: 0 },
  { id: 5, nombre: "Verduras", cantidad: "", puntajeNutricial: 0 },
  { id: 6, nombre: "Frutas", cantidad: "", puntajeNutricial: 0 },
  { id: 7, nombre: "Carnes", cantidad: "", puntajeNutricial: 0 },
  { id: 8, nombre: "Especias", cantidad: "", puntajeNutricial: 0 },
  { id: 9, nombre: "Sal-Pimienta", cantidad: "", puntajeNutricial: 0 },
  {
    id: 10,
    nombre: "Frutos Secos-Semillas",
    cantidad: "",
    puntajeNutricial: 0,
  },
];

const App = () => {
  console.log('app', { ingredientsList})
  const [renderPage, setRenderPage] = useState("home");
  return (
    <div className="content">
      <nav>
        <h1>Al Horno.com</h1>{" "}
        <img className="Logo" src={logo} alt="Logo de Al Horno.com" />
        <div className="NavBar">
          <ul className="Lista">
            <li onClick={() => setRenderPage("home")}>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#" onClick={() => setRenderPage("create-recipe")}>
                Mis Recetas
              </a>
            </li>
            <li onClick={() => setRenderPage("ingredients")}>
              <a href="#">Ingredientes</a>
            </li>
          </ul>
        </div>
      </nav>
      {renderPage === "home" && (
        <Home navegateToCreateRecipe={() => setRenderPage("create-recipe")} />
      )}
      {renderPage === "create-recipe" && (
        <CreateRecipe ingredientsList={ingredientsList} />
      )}
      {renderPage === "ingredients" && <Ingredients ingredientsList={ingredientsList} />}
      <Footer />
    </div>
  );
};

export default App;
