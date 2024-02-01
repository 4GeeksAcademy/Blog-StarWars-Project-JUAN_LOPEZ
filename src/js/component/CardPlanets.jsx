import React, { useContext } from "react";
import { Context } from "../store/appContext";

const CardPlanets = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h3>Planets</h3>
      <div className="d-flex justify-content-center">
        {/* aqui empieza card para los planetas */}
        <div className="container row row-cols-5">
          {store.planets.map((planet) => {
            console.log(planet);
            return (
              <div key={planet.uid} id="planets" className="container col">
                <div className="mb-3">
                  <div className="card">
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
                          <button className="btn btn-success">
                            See details
                          </button>
                          <button className="btn btn-warning">favorites</button>
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

export default CardPlanets;
