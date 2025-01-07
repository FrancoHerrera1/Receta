import "./home.css";
import ImgHero from "../imagenes/Receta-Sarten.jpg";

const Home = ({ navegateToCreateRecipe }) => {
  return (
    <div className="Cuerpo-Home">
      <div className="Hero">
        <p>
          Bienvenido al Horno.com! Aquí podras crear todas las recetas que tú
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
        <img src={ImgHero} alt="Imagen Hero" />
      </div>
    </div>
  );
};

export default Home;
