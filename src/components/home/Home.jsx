import "./home.css";
import ImgHero from "../imagenes/Receta-Sarten.jpg";
import { useEffect } from "react";

const Home = ({ navegateToCreateRecipe, baseIngredientsList }) => {

  useEffect(() => {
    localStorage.setItem("ingredients", JSON.stringify(baseIngredientsList));
  }, []);

  return (
    <div className="cuerpo-home">
      <div className="Hero">
        <p>
          Bienvenido AlHorno.com! Aquí podras crear todas las recetas que tú
          quieras en pocos pasos, de una forma simple y rápida... Disfruta de
          una variedad de platos deliciosos y elaborados con todos los
          ingredientes que desees para crear una experiencia gastronómica unica!
        </p>
        <button
          onClick={navegateToCreateRecipe}
          type="button"
          className="btn btn-outline-success"
        >
          Crear Receta
        </button>
      </div>
      <img src={ImgHero} alt="Imagen Hero" />
    </div>
  );
};

export default Home;
