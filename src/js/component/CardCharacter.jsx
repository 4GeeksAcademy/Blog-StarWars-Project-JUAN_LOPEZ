import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardCharacter = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h3>Characters</h3>
      <div className="d-flex justify-content-center">
        {/* empieza el card */}
        <div className="container row row-cols-5">
          {store.characters.map((character) => {
            return (
              <div
                key={character.uid}
                id="characters"
                className="container col"
              >
                <div className="mb-3">
                  <div className="card">
                    <div className="">
                      <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                        className="img-fluid rounded"
                        alt={character.properties.name}
                      />
                    </div>
                    {/* tomamos los detalles del personaje */}

                    <div className="">
                      <div className="card-body">
                        <h5 className="card-title">
                          {character.properties.name}
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

                        <div className="card-text d-flex justify-content-between">
                          <Link
                            to={`/characters/${character.uid}`}
                            className="btn btn-success"
                          >
                            See details
                          </Link>
                          <button
                            onClick={() => {
                              actions.handleFavorite({name:character.properties.name, _id: character._id});
                            }}
                            className="btn btn-warning"
                          >
                            favorites
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardCharacter;
