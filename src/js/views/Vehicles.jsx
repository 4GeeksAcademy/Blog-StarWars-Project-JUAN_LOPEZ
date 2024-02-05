import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

export const Vehicles = () => {
  const params = useParams();
  const [VehicleDetails, setVehicleDetails] = useState([]);

  const getVehicleDetails = async () => {
    const response = await fetch(
      `https://www.swapi.tech/api/vehicles/${params.uid}`
    );
    const data = await response.json();
    const details = data;
    setVehicleDetails(details.result.properties);
  };
  getVehicleDetails();

  return (
    <>
      <div className="container d-flex justify-content-between">
        <div>
          <h1>{VehicleDetails.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            cupiditate commodi! Maxime quod molestias iure eos ratione harum
            itaque, repellendus assumenda voluptatum necessitatibus accusamus
            beatae. Quis et, ex aliquam esse repellendus vel voluptate rerum,
            veniam assumenda culpa dolorem, vitae quia sunt. Qui, ipsa.
            Molestias possimus expedita voluptas rem delectus similique sint
            rerum excepturi illo eos sequi placeat alias aperiam iure ipsum
            perferendis quod, cum optio quasi quaerat exercitationem nisi
            consequatur. Nisi nulla laboriosam consectetur sint eius
            perspiciatis minus, delectus, totam fugiat pariatur deserunt
            asperiores ipsam praesentium quia, a dolorum. Mollitia eaque maiores
            quibusdam excepturi minus reiciendis ut ad sint deserunt laborum
            atque, nihil nulla sapiente, dignissimos, eos modi? Iusto eum veniam
            magnam velit provident eaque doloremque dolorem ducimus, minima id.
          </p>
        </div>
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`}
          alt=""
        />
      </div>
    </>
  );
};
