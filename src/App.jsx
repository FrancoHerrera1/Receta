import { useState } from "react";
import Home from "./components/home/Home";
import CreateRecipe from "./components/createRecipe/CreateRecipe";
import RecipeBuilder from "./components/createRecipe/RecipeBuilder";
import IngredientList from "./components/createRecipe/IngredientList";
import Footer from "./components/footer/Footer";
import "./App.css";

import logo from "./components/imagenes/PolloLogo.png";

const App = () => {
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
            <li onClick={() => setRenderPage("IngredientList")}>
              <a href="#">Ingredientes</a>
            </li>
          </ul>
        </div>
      </nav>
      {renderPage === "home" && (
        <Home navegateToCreateRecipe={() => setRenderPage("create-recipe")} />
      )}
      {renderPage === "create-recipe" && <CreateRecipe />}
      {renderPage === "recipe-builder" && <RecipeBuilder />}
      {renderPage === "ingredient-list" && <IngredientList />}
      <Footer />
    </div>
  );
};

export default App;
