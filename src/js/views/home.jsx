import React, { useContext } from "react";
import "../../styles/home.css";
import CardCharacter from "../component/CardCharacter.jsx";
import { Context } from "../store/appContext";
import CardPlanets from "../component/CardPlanets.jsx";
import CardVehicles from "../component/CardVehicles.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <CardCharacter />
      <CardPlanets />
      <CardVehicles />
    </>
  );
};
