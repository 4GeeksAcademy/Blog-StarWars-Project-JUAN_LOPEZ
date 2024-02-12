import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardVehicles = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container mt-4">
        <h3 className="text-danger">Vehicles</h3>
        <hr />
      </div>
      <div className="container py-2 overflow-auto">
        {/* empieza el card */}
        <div className="d-flex flex-row flex-nowrap">
          {store.vehicles.map((vehicle) => {
            return (
              <div
                className="card mx-1"
                key={vehicle.uid}
                style={{ minWidth: "18rem" }}
              >
                <div>
                  <img
                    className="img-fluid rounded"
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                    alt={vehicle.properties.name}
                  />
                </div>
                <div className="">
                  <div className="card-body">
                    <h5 className="card-title">{vehicle.properties.name}</h5>
                    <p className="card-text">{vehicle.properties.lenght}</p>
                    <p className="card-text">
                      Passengers:
                      {vehicle.properties.passengers}
                    </p>
                    <p className="card-text">
                      Model:
                      {vehicle.properties.model}
                    </p>
                    <div className="card-text d-flex justify-content-between">
                      <Link
                        to={`/vehicles/${vehicle.uid}`}
                        className="btn btn-success"
                      >
                        See details
                      </Link>
                      <button
                        onClick={() => {
                          actions.handleFavorite({
                            name: vehicle.properties.name,
                            _id: vehicle._id,
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

export default CardVehicles;
