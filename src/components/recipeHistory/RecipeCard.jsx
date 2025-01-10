const RecipeCard = ({ recipe, onDelete }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "2rem",
        height: "300px",
        overflowY: "scroll",
      }}
    >
      <div>
        <h4>{recipe?.name}</h4> - Puntaje Nutricional: {recipe?.score}
      </div>
      <p>Ingredientes:</p>
      <ul>
        {recipe?.ingredients?.map((item) => {
          return (
            <div key={item?.id}>
              <li>
                {item.nombre} - {item.cantidad}
              </li>
            </div>
          );
        })}
      </ul>
      <button onClick={onDelete}>Borrar Receta</button>
    </div>
  );
};

export default RecipeCard;
