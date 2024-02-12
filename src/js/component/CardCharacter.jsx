import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardCharacter = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container mt-4">
        <h3 className="text-danger">Characters</h3>
        <hr />
      </div>
      <div className="container py-2 overflow-auto">
        {/* empieza el card */}
        <div className="d-flex flex-row flex-nowrap">
          {store.characters.map((character) => {
            return (
              <div
                className="card mx-1"
                key={character.uid}
                style={{ minWidth: "18rem" }}
              >
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
                    <h5 className="card-title">{character.properties.name}</h5>
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
                          actions.handleFavorite({
                            name: character.properties.name,
                            _id: character._id,
                          });
                        }}
                        className="btn btn-warning"
                      >
                        favorites
                      </button>
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
