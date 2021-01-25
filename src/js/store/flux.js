const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			character: [],
			planet: [],
			vehicle: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			addFavorite: newItem => {
				var storeCopy = getStore(); // Copy of the Store

				var newFavorites = storeCopy.favorites.concat(newItem);

				setStore({ favorites: newFavorites }); //New chamges values of the Store
			},
			loadSomeData: () => {
				/** fetch().then().then(data => setStore({ "foo": data.bar }))*/

				fetch("https://swapi.dev/api/people/") //Characters Hooks API for People
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json
						return response.json();
					})
					.then(function(responseAsJson) {
						// Do stuff with the JSON for People
						setStore({ character: responseAsJson.results });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});

				//Planet Hooks
				fetch("https://swapi.dev/api/planets/") //API for Planets
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						// Do stuff with the JSON for Planets
						setStore({ planet: responseAsJson.results });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});

				//Vehicles Hooks
				fetch("https://swapi.dev/api/starships/") //API for Vehicles
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						// Do stuff with the JSON for Vehicles
						setStore({ vehicle: responseAsJson.results });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
