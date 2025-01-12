import "./recipeCards.css"

const RecipeCard = ({ recipe, onDelete }) => {
  return (
    <div className="card">
      <div style={{display:"flex", justifyContent:"center"}}>
        <h4>{recipe?.name}</h4>
      </div>
      <div style={{padding:"10px"}}>
      <p>Ingredientes:</p>
      <ul>
        {recipe?.ingredients?.map((item) => {
          return (
            <div className="ingredient-row" key={item?.id}>
              <li>
                {item.nombre} {item.cantidad}
              </li>
            </div>
          );
        })}
      </ul>
      Puntaje Nutricional: {recipe?.score}
      </div>
      <div className="ingredients-page-card-button" style={{display:"flex", justifyContent:"center", paddingTop:"10px"}}>
      <button onClick={onDelete}>Borrar Receta</button>
      </div>
    </div>
  );
};

export default RecipeCard;
