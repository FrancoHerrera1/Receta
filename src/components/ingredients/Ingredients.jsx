const Ingredients = ({ ingredientsList }) => {
  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Ingrese ingrediente"
            // value={nuevaCantidad[ingrediente.id] || ""}
            onChange={() => {}}
          ></input>
          <input
            type="text"
            placeholder="Ingrese valor nutricional"
            // value={nuevaCantidad[ingrediente.id] || ""}
            onChange={() => {}}
          ></input>
        </div>
        <button onClick={() => null}>Agregar</button>
      </div>
      <div>
        <ul>
          {ingredientsList?.map((item) => {
            return (
              <li key={item?.id}>
                {item.nombre} {item.cantidad}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Ingredients;
