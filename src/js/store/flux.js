const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      endpoint: "https://www.swapi.tech/api/",
      characters: JSON.parse(localStorage.getItem("characters")) || [],
      planets: JSON.parse(localStorage.getItem("planets")) || [],
      vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
      favorites: [],
    },
    actions: {
      getCharacters: async () => {
        const store = getStore();
        if (store.characters <= 0) {
          const response = await fetch(store.endpoint + "people");
          const charactersList = await response.json();
          console.log(charactersList.results);
          for (let details of charactersList.results) {
            const detailsResponse = await fetch(details.url);
            const detailsJson = await detailsResponse.json();
            // console.log(detailsJson);
            setStore({ characters: [...store.characters, detailsJson.result] });
          }
          localStorage.setItem("characters", JSON.stringify(store.characters));
        }
      },
      getPlanets: async () => {
        const store = getStore();
        if (store.planets <= 0) {
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
          localStorage.setItem("planets", JSON.stringify(store.planets));
        }
      },
      getVehicles: async () => {
        const store = getStore();
        if (store.vehicles <= 0) {
          const response = await fetch(store.endpoint + "vehicles");
          const vehiclesList = await response.json();
          for (let details of vehiclesList.results) {
            const detailsResponse = await fetch(details.url);
            const detailsVehicles = await detailsResponse.json();
            setStore({ vehicles: [...store.vehicles, detailsVehicles.result] });
            console.log(store.vehicles);
          }
          localStorage.setItem("vehicles", JSON.stringify(store.vehicles));
        }
      },

      handleFavorite: (item) => {
        const store = getStore();
        const actions = getActions();
        if (store.favorites.some(fav => fav._id == item._id)){
          actions.handleDelete(item)
          return null
        }
        setStore({ favorites: [...store.favorites, item] });
        console.log(store.favorites);
      },

      handleDelete: (item) => {
        const store = getStore();
        const itemDeleted = store.favorites.filter((fav) => item._id !== fav._id);
        console.log(itemDeleted.properties)
        setStore({ favorites: itemDeleted });
      },
    },
  };
};

export default getState;
