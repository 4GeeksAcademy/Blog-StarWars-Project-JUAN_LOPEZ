import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardPlanets = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container mt-4">
        <h3 className="text-danger">Planets</h3>
        <hr />
      </div>
      <div className="container py-2 overflow-auto">
        {/* empieza el card */}
        <div className="d-flex flex-row flex-nowrap">
          {store.planets.map((planet) => {
            return (
              planet.uid != 1 && (
                <div
                  className="card mx-1"
                  key={planet.uid}
                  style={{ minWidth: "18rem" }}
                >
                  <div>
                    <img
                      src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                      className="img-fluid rounded"
                      alt={planet.properties.name}
                    />
                  </div>
                  <div>
                    <div className="card-body">
                      <h5 className="card-title">{planet.properties.name}</h5>
                      <p className="card-text">
                        Diameter: {planet.properties.diameter}
                      </p>
                      <p className="card-text">
                        Population: {planet.properties.population}
                      </p>
                      <p className="card-text">
                        Gravity: {planet.properties.gravity}
                      </p>
                      <p className="card-text">
                        climate: {planet.properties.climate}
                      </p>
                      <div className="card-text d-flex justify-content-between">
                        <Link
                          to={`/planets/${planet.uid}`}
                          className="btn btn-success"
                        >
                          See details
                        </Link>
                        <button
                          onClick={() => {
                            actions.handleFavorite({
                              name: planet.properties.name,
                              _id: planet._id,
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
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardPlanets;
