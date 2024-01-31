import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

const CardCharacter = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <h3>Characters</h3>

      {/* empieza el card */}
      {store.characters.map((character) => {
        return (
          <div key={character.uid} id="characters" className="row">
            <div className="card mb-3 container col-4">
              <div className="g-0">
                <div className="">
                  <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                    className="img-fluid rounded-start"
                    alt="character.properties.name"
                  />
                </div>
                {/* tomamos los de talles del personaje */}

                <div className="">
                  <div className="card-body">
                    <h5 className="card-title">
                      Name: {character.properties.name}
                    </h5>
                    <p className="card-text">
                      Hair color: {character.properties.hair_color}
                    </p>
                    <p className="card-text">
                      Height: {character.properties.height}
                    </p>
                    <p className="card-text">
                      Gender: {character.properties.gender}
                    </p>
                    <p className="card-text d-flex justify-content-between">
                      <div></div>
                      <button className="btn btn-success">See details</button>
                      <button className="btn btn-warning">favorites</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardCharacter;
