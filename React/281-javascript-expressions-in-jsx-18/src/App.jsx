const App = () => {
  const fName = "John";
  const lName = "Doe";
  const luckyNumber = 7;
  return (
    <>
      <h1>Hello {`${fName} ${lName}`}!</h1>
      <p>Your lucky number is {luckyNumber}</p>
    </>
  );
};

export default App;
