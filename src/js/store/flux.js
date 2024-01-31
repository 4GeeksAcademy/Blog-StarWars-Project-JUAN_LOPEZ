const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      endpoint: "https://www.swapi.tech/api/",
      characters: [],
      characterDetails: [],
      imageUrl: [],
    },
    actions: {
      getImage: "",

      getCharacters: async () => {
        const store = getStore();
        const response = await fetch(store.endpoint + "people");
        const charactersList = await response.json();
        console.log(charactersList.results);
        // setStore({ characters: charactersList.results });
        for (let details of charactersList.results) {
          const detailsResponse = await fetch(details.url);
          const detailsJson = await detailsResponse.json();
          setStore({ characters: [...store.characters, detailsJson.result] });
        }
      },
    },
  };
};

export default getState;
