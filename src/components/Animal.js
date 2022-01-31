/*
 * Created Date: Monday, January 31st 2022, 12:16:50 am
 * Author: Hichem
 * Master 2 GL Groupe 1
 * Copyright (c) 2022 Aitouakli Hichem
 */

import React from "react";
const cardStyle = {
  height: "30rem",
  maxWidth: "20rem",
  flex: "1",
  padding: "1em",
};
function Animal(props) {
  const handleChange = (nom) => {
    props.changeLike(nom);
  };

  return (
    <div style={cardStyle} className="container-fluid row align-items-start">
      <div className="card text-left">
        <img
          className="card-img-top"
          src={require("../images/" + props.animal.image)}
          alt=""
        />
        <div className="card-body">
          <h4 className="card-title">Nom : {props.animal.nom}</h4>
          <p className="card-text">Espece : {props.animal.espece}</p>
          <p className="card-text">Age : {props.animal.age}</p>
          <p className="card-text">Description: {props.animal.descr}</p>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                name=""
                id=""
                checked={props.animal.like}
                onChange={() => handleChange(props.animal.nom)}
              />
              Like
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal;
