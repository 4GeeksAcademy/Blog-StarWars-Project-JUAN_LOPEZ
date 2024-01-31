import React, { useContext } from "react";
import "../../styles/home.css";
import CardCharacter from "../component/CardCharacter.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <CardCharacter />
    </>
  );
};
