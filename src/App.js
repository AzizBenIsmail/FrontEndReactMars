import logo from "./logo.svg";
import "./App.css";
import ComposantFc from "./ComposantFc"; //composant
import React, { useState, useEffect } from "react";
function App() {
  //js cosnole
  const name = "9antra";
  const [nom, setNom] = useState("votre nom");
  const [prenom, setPrenom] = useState("vore prenom");
  const [age, setAge] = useState("votre age");
  const element1 = <h1>hello</h1>;
  //const code = 0;
  const [code, setCode] = useState(10);
  //const pi = 3.14
  //const [pi,setPi] = useState(3.14)
  //const element5 = <h5>hello</h5>;

  const etudiant = { nom: "moahmed", prenom: "ben foulen" };

  const listUsers = [
    { nom: "moahmed", prenom: "ben foulen", id: 0 },
    { nom: "morsi", prenom: "ben 3elen", id: 1 },
    { nom: "ahmed", prenom: "ben 3elen", id: 2 },
    { nom: "aziz", prenom: "ben 3elen", id: 3 },
    { nom: "amal", prenom: "ben 3elen", id: 4 },
    { nom: "motaz", prenom: "ben 3elen", id: 5 },
    { nom: "asma", prenom: "ben 3elen", id: 6 },
    { nom: "noura", prenom: "ben 3elen", id: 7 },
    { nom: "nada", prenom: "ben 3elen", id: 8 },
    { nom: "sabrin", prenom: "ben 3elen", id: 9 },
  ];

  function getWelcomeMessage(etudiant) {
    return "marahbe bik " + etudiant.nom + " fi 9antra the bridge";
  }

  //useEffect(()=>{} ,)
  //useEffect(() => {},[])
  //useEffect(() => {},[x])

  // useEffect(() => {
  //   console.log('cette fonction va etre execute chaque re-render');
  //   console.log('car pas de deuxieme argument passer');
  //   });

  useEffect(() => {
    console.log("cette fonction va etre execute une fois seulement ");
    console.log("car le deuxieme argument est un tableau vide ");
    return () => {
      console.log(
        " cette partie va etre execute seulement lors de loperation unmounting "
      );
    };
  }, []);

  // useEffect(() => {
  //   console.log('cette fonction va etre execute la premiere fois et a chaque modification de la variable code ');
  //   console.log('car le deuxieme argument est code ');
  //   return () => {
  //   console. log('cette partie va etre execute pour nettoyer et lors de loperation unmounting ');
  //   }
  //   },[nom]);

  //js
  return (
    //css peak
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
          <br />
          <button onClick={() => setCode(code - 5)}>Cliquer ici</button>
          {code}
          <br />
          {/* {pi} */}
          <br />
          {name}
          <br />
          {nom} |{prenom} | {age}
          <br />
          {/* <button onClick={() => setName(name + "A") } >Ajouter A</button> */}
          nom
          <input onChange={(e) => setNom(e.target.value)} />
          prenom
          <input onChange={(e) => setPrenom(e.target.value)}></input>
          age
          <input onChange={(e) => setAge(e.target.value)}></input>
        </div>
      </header>
      <ComposantFc nom="bilel" prenom="ben foulen"/>
    </div>
  ); //jsx
}

export default App;
