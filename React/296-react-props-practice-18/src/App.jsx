import Card from "./components/Card.jsx";
import Contacts from "./contacts.js";

const App = () => {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contacts.map((contact, index) => (
        <Card
          key={contact.id} // Use a unique key if possible
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
};

export default App;
