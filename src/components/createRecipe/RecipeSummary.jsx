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

      <p>Ingredientes Seleccionados:</p>
      <ul>
        {recipeItems?.map((item) => {
          return (
            <div key={item?.id}>
              <li>
                {item.nombre} {item.cantidad}
              </li>

              <button
                onClick={() =>
                  setRecipeItems((prev) =>
                    prev.filter((recipeItem) => recipeItem?.id !== item?.id)
                  )
                }
              >
                Borrar
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeSummary;