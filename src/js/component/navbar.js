import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <div>
          <Link to={"/"} className="navbar-brand">
            <img
              src="https://media.designrush.com/inspiration_images/304681/conversions/Star_Wars_Logo1_bc9808573b50-desktop.jpg"
              alt="Bootstrap"
              width="100"
              height="64"
            />
          </Link>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Favorites {store.favorites.length}
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Favorites 
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <ul>
                    {store.favorites.map((fav, index) => (
                      <div key={index} className="d-flex justify-content-between my-2">
                        <li>{fav.name}</li>
                        {/* {console.log(fav.uid)} */}
                        <button onClick={()=>actions.handleDelete({ _id: fav._id})} className="btn btn-danger rounded">
                          delete
                        </button>
                      </div>
                    ))}
                  </ul>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
