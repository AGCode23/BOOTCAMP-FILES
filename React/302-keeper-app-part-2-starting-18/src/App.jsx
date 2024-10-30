import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Note from "./components/Note/Note";
import notes from "./notes";

const App = () => (
  <>
    <Header />
    {/* Destructuring the note object in the map function to access it directly instead of
    accessing each prop like note.title and note.content to avoid repetition. */}
    {notes.map(({ key, title, content }) => (
      <Note key={key} title={title} content={content} />
    ))}
    <Footer />
  </>
);

export default App;
