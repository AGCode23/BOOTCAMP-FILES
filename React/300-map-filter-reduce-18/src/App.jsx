import emojipedia from "./emojipedia";
const meanings = emojipedia.map((mean) => {
  return mean.meaning.substring(0, 100);
});
console.log(meanings);
const App = () => {
  return;
};

export default App;
