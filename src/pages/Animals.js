import React, { useState } from "react";
import Animal from "../components/Animal";

function Animals() {
  const animalsArray = [
    {
      nom: "Tom",
      espece: "Chat",
      age: "2",
      descr: "un chat hyper gentil",
      image: "Tom.jpg",
      like: false,
    },
    {
      nom: "Greta",
      espece: "Chien",
      age: "5",
      descr: "une chienne adorable pour les enfants",
      image: "Greta.jpg",
      like: false,
    },
    {
      nom: "Brandon",
      espece: "Chien",
      age: "10",
      descr: "Ce bulldog est fait pour les grands amateurs",
      image: "Brandon.jpg",
      like: false,
    },
  ];

  const [myAnimals, setAnimals] = useState(animalsArray);

  const changeLike = (nom) => {
    setAnimals(  //pour changer like
      myAnimals.map((animal) =>
        animal.nom === nom ? { ...animal, like: !animal.like } : { ...animal }
      )
    );
    console.log("changed");
  };

  return (
    <div>
      <AnimalsList changeLike={changeLike} animals={myAnimals}></AnimalsList>
    </div>
  );
}



const AnimalsList = (props) => {
  const divStyle = {
    display: "flex",
  };
  const preStyle = {
    backgroundColor:'black',
    color:'white',
  }

  console.log(props.animals); // print les props

  const alist = props.animals.map((prop, i) => {
    return (
      <Animal key={i} changeLike={props.changeLike} animal={prop}></Animal>
    );
  });

  return (
    <div>
      <div style={divStyle}>{alist}</div>
      <pre style={preStyle}>{JSON.stringify(props.animals, null, 2)}</pre>
    </div>
  );
};

export default Animals;
