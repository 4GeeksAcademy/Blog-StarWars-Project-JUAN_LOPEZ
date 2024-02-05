import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

export const Planets = () => {
  const params = useParams();
  const [planetDetails, setPlanetDetails] = useState([]);

  const getPlanetDetails = async () => {
    const response = await fetch(
      `https://www.swapi.tech/api/planets/${params.uid}`
    );
    const data = await response.json();
    const details = data;
    setPlanetDetails(details.result.properties);
  };
  getPlanetDetails();

  return (
    <>
      <div className="container d-flex justify-content-between">
        <div>
          <h1>{planetDetails.name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nesciunt, vitae quibusdam iusto illum animi iste aliquam autem
            dolores, fuga, blanditiis doloribus incidunt optio provident sed
            tenetur beatae magni eaque minus! Nam amet optio, quod incidunt
            doloremque at beatae quisquam tempore dolorum repellendus, deserunt
            quaerat? Saepe pariatur totam necessitatibus ipsam, rem ad
            exercitationem similique possimus! Consectetur, saepe! Minima
            perspiciatis eligendi tempora inventore tenetur officiis
            accusantium, totam porro hic dolorum itaque sunt laudantium
            similique iste pariatur praesentium. Quaerat possimus cumque aut
            commodi temporibus consequatur iste aspernatur laudantium. Iure
            exercitationem voluptate modi quia eveniet sapiente velit, corrupti
            quidem minus culpa, natus harum quod. Est quo, laudantium veritatis,
            impedit fugiat dolorum, perspiciatis vero dignissimos repudiandae
            incidunt quaerat quod eos accusantium. Deleniti, cum quos?
          </p>
        </div>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
          alt=""
        />
      </div>
    </>
  );
};
