import React from "react";
import "./home.css";
import logo from "../imagenes/PolloLogo.png";
import ImgHero from "../imagenes/Receta-Sarten.jpg";

const Home = ({ navegateToCreateRecipe }) => {
  return (
    <div className="Cuerpo-Home">
      <h1>Al Horno.com</h1> <img className="Logo" src={logo} alt="Logo de Al Horno.com" />

      <div className="NavBar">
        <ul className="Lista">
          <li><a href="#">Home</a></li>
          <li><a href="#">Ingredientes</a></li>
          <li><a href="#">Mis Recetas</a></li>
        </ul>
      </div>

      <div className="Hero">
      <p>Bienvenido al Horno.com! Aquí podras crear todas las recetas que tú quieras en pocos pasos, de una forma simple y rápida...
        Disfruta de una variedad de platos deliciosos y elaborados con todos los ingredientes que desees para crear una experiencia
        gastronómica unica!
      </p>
      <button onClick={navegateToCreateRecipe} type="button" class="btn btn-outline-success">Crear Receta</button>
      <img src={ImgHero} alt="Imagen Hero" />
      
      </div>

    </div>
  );
};

export default Home;
