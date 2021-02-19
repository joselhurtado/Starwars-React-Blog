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
				// we create a new function addFavorite to make a favorite list of star wars database.
				var storeCopy = getStore();
				// we make a copy of storeCopy to manipulate it without the need of adjusting the main getState.
				var checkItem = storeCopy.favorites.find(value => {
					// we are searching for any value with similar names
					return value == newItem;
				});
				// we use if else statement to correctly display no more than one  of each value on newItem, only allow when item is not defined.
				if (checkItem == undefined) {
					// we are copying getStore to manipulate it in our favor without affecting the default store. Nothing in the real store has been changed.
					// map method, filter and find will be a mostly used in react. Filter loops the array. My filter is only going to keep the elements that pass the conditions.
					var newFavorites = storeCopy.favorites.concat(newItem);
					// changing stuff in te local copy. if we want to keep them then we assign the new change value of the store into the next one.
					// its essential to contact because contact does not change the original array. Push changes the original array, it deletes it!
					setStore({ favorites: newFavorites });
				}
			},
			// we create a new function to delete from the favorite list
			deleteFavorite: deletedItem => {
				var storeCopy = getStore();
				// instead of setting the first array with find, we use filter to find within the array the specific element we need in order to delete.
				var newFavorites = storeCopy.favorites.filter((value, index) => {
					// if the value is not equal we set it to deletedItem
					return value != deletedItem;
				});
				setStore({ favorites: newFavorites });
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
