import "./recipeSummary.css";

const RecipeSummary = ({
  recipeName,
  recipeItems,
  recipeScore,
  setRecipeItems,
  setRecipeName,
}) => {
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input
          type="text"
          id="recipeName"
          name="recipeName"
          value={recipeName}
          placeholder="Nombra tu receta..."
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <div>Puntaje:{recipeScore}</div>
      </div>

      <p style={{fontWeight: "bold"}}>Ingredientes Seleccionados:</p>
      <ul style={{padding: "0 16px"}}>
        {recipeItems?.map((item) => {
          return (
            <div key={item?.id} className="ingredient-row">
              <li> 
                {item.nombre} {item.cantidad}
              </li>

              <button className="delete-button"
                onClick={() =>
                  setRecipeItems((prev) =>
                    prev.filter((recipeItem) => recipeItem?.id !== item?.id)
                  )
                }
              >
                <i class="material-icons">delete</i>
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeSummary;