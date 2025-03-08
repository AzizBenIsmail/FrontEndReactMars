import logo from "./logo.svg";
import "./App.css";

function App() {
  //js cosnole
  const name = "9antra";
  const element1 = <h1>hello</h1>;
  //const element5 = <h5>hello</h5>;

  const etudiant = { nom: "moahmed", prenom: "ben foulen" };

  const listUsers = [
    { nom: "moahmed", prenom: "ben foulen", id: 0 },
    { nom: "morsi", prenom: "ben 3elen", id: 1 },
    { nom: "ahmed", prenom: "ben 3elen", id: 1 },
    { nom: "aziz", prenom: "ben 3elen", id: 1 },
    { nom: "amal", prenom: "ben 3elen", id: 1 },
    { nom: "motaz", prenom: "ben 3elen", id: 1 },
    { nom: "asma", prenom: "ben 3elen", id: 1 },
    { nom: "noura", prenom: "ben 3elen", id: 1 },
    { nom: "nada", prenom: "ben 3elen", id: 1 },
    { nom: "sabrin", prenom: "ben 3elen", id: 1 },
  ];

  function getWelcomeMessage(etudiant){
    return "marahbe bik " + etudiant.nom +" fi 9antra the bridge"
  }
  //js
  return ( //css peak
    //jxs => html + js vue
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="tv">
        {name}
        {element1}
        bonjour {etudiant.nom} {etudiant.prenom}
        <hr /> Tables
        <table border={5}>
          <caption>List etudiant</caption>
          <tr>
            <td>nom</td>
            <td>prenom</td>
          </tr>
          {listUsers.map(function (user) {
              return (
          <tr key={user.id}>
            <td>{getWelcomeMessage(user)}</td>
            <td>{user.prenom}</td>
          </tr>
            );
          })}
        </table>
        {/* {listUsers.map(function (user) {
          return (
            <div key={user.id}>
              {" "}
              {user.nom} | {user.prenom}
            </div>
          );
        })} */}
        {getWelcomeMessage(etudiant)}
        </div>
      </header>
    </div>
  ); //jsx
}

export default App;
