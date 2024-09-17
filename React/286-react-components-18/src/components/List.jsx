const List = () => {
  const foods = ["Bacon", "Jamon", "Noodles"];
  return (
    <ul>
      {foods.map((food, index) => (
        <li key={index}>{food}</li>
      ))}
    </ul>
  );
};

export default List;
