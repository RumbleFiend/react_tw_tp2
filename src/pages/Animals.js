import Animal from "../components/Animal";
import React, { Component } from 'react';

export default class Animals extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      myAnimals :[
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
      ],
    }
  }

  changeLike (nom){
    const newArray = this.state.myAnimals.map((animal) =>
    animal.nom === nom ? { ...animal, like: !animal.like } : { ...animal }
    )
    this.setState({  //pour changer like
      myAnimals: newArray
    }
    );
    console.log("changed");
  };

  
  render() {
    return <div><AnimalsList changeLike={this.changeLike} animals={this.state.myAnimals}></AnimalsList></div>;
  }
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


