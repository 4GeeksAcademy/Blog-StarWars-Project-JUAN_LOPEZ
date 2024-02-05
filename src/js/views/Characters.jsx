import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

export const Characters = () => {
  const params = useParams();
  console.log(params);
  const [CharacterDetails, setCharacterDetails] = useState([]);

  const getCharacterDetails = async () => {
    const response = await fetch(
      `https://www.swapi.tech/api/people/${params.uid}`
    );
    const data = await response.json();
    const details = data;
    console.log(details);
    setCharacterDetails(details.result.properties);
  };
  getCharacterDetails();
  console.log(CharacterDetails);
  return (
    <>
      <div className="container d-flex justify-content-between">
        <div>
          <h1>{CharacterDetails.name}</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            atque quisquam praesentium quae veniam nobis consequuntur culpa
            doloribus reprehenderit deserunt ipsa nostrum, nulla doloremque,
            voluptatem autem. Sequi debitis, non, ex ipsum perferendis ut a
            deserunt tempore blanditiis, at est error reprehenderit similique
            fuga aliquam voluptatum consequatur nostrum molestiae nesciunt
            neque? Deserunt facere reprehenderit architecto similique deleniti
            atque accusamus ut dolorum itaque facilis officia voluptas maxime
            rerum quidem error doloremque ad veritatis vero eveniet, voluptatem
            aperiam. Qui aperiam impedit architecto exercitationem mollitia
            accusamus nulla! Ut laudantium iste qui, dignissimos beatae eius
            debitis dolor vitae sequi dicta unde? Alias asperiores eius ullam
            labore! Culpa velit laudantium, ut quos reiciendis animi quia
            asperiores ducimus recusandae voluptate corrupti cumque eum facere.
            Quam, facilis vero?
          </p>
        </div>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
          alt=""
        />
      </div>
    </>
  );
};
