const App = () => {
  const fName = "John";
  const lName = "Doe";
  const year = new Date().getFullYear();

  return (
    <div>
      <p>Created by {`${fName} ${lName}`}.</p>
      <p>Copyright {year}</p>
    </div>
  );
};

export default App;
