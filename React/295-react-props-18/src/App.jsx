// Using props
// const Card = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <img src={props.img} alt="avatar-img" />
//       <p>{props.tel}</p>
//       <p>{props.email}</p>
//     </div>
//   );
// };

// Destructuring props (RECOMMENDED)
const Card = ({ name, img, tel, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt="avatar-img" />
      <p>{tel}</p>
      <p>{email}</p>
    </div>
  );
};

const App = () => {
  // Storing data to array (RECOMMENDED FOR SCALABILITY)
  const contacts = [
    {
      name: "Beyonce",
      img: "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
      tel: "+123 456 789",
      email: "b@beyonce.com",
    },
    {
      name: "Jack Bauer",
      img: "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
      tel: "+987 654 321",
      email: "jack@nowhere.com",
    },
    {
      name: "Chuck Norris",
      img: "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
      tel: "+918 372 574",
      email: "gmail@chucknorris.com",
    },
  ];

  return (
    <div>
      <h1>My Contacts</h1>
      {/* Using props */}
      {/* <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        email="b@beyonce.com"
      />

      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        tel="+987 654 321"
        email="jack@nowhere.com"
      />

      <Card
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        tel="+918 372 574"
        email="gmail@chucknorris.com"
      /> */}

      {/* Destructuring props (RECOMMENDED) */}
      {contacts.map((contact, index) => (
        <Card
          key={index}
          name={contact.name}
          img={contact.img}
          tel={contact.tel}
          email={contact.email}
        />
      ))}
    </div>
  );
};

export default App;
// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
