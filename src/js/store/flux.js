const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      endpoint: "https://www.swapi.tech/api/",
      characters: [],
      planets: [],
      vehicles: [],
    },
    actions: {
      getCharacters: async () => {
        const store = getStore();
        const response = await fetch(store.endpoint + "people");
        const charactersList = await response.json();
        console.log(charactersList.results);
        for (let details of charactersList.results) {
          const detailsResponse = await fetch(details.url);
          const detailsJson = await detailsResponse.json();
          // console.log(detailsJson);
          setStore({ characters: [...store.characters, detailsJson.result] });
        }
      },
      getPlanets: async () => {
        const store = getStore();
        const response = await fetch(store.endpoint + "planets");
        const planetsList = await response.json();
        console.log(planetsList.results);
        for (let details of planetsList.results) {
          const detailsResponse = await fetch(details.url);
          const detailsPlanet = await detailsResponse.json();
          console.log(detailsPlanet);
          setStore({ planets: [...store.planets, detailsPlanet.result] });
          console.log(store.planets);
        }
      },
      getVehicles: async () => {
        const store = getStore();
        const response = await fetch(store.endpoint + "vehicles");
        const vehiclesList = await response.json();
        for (let details of vehiclesList.results) {
          const detailsResponse = await fetch(details.url);
          const detailsVehicles = await detailsResponse.json();
          setStore({ vehicles: [...store.vehicles, detailsVehicles.result] });
          console.log(store.vehicles);
        }
      },
    },
  };
};

export default getState;
