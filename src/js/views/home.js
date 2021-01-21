import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CharactersCard } from "../component/charactersCard";
import { PlanetsCard } from "../component/planetsCard";

import "../../styles/home.scss";

export const Home = () => {
	const [characters, setCharacters] = useState([]); //Hooks for characters
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	useEffect(() => {
		fetch("https://swapi.dev/api/people/") //API for People
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON for People
				setCharacters(responseAsJson.results);
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
				setPlanets(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});

		//Vehicles Hooks
		fetch("https://swapi.dev/api/vehicles/") //API for Vehicles
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON for Vehicles
				setVehicles(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	return (
		<div className="container-fluid">
			<h1 className="col">Characters</h1>
			<div className="characters d-flex overflow-auto">
				{characters.map((character, index) => {
					return <CharactersCard character={character} key={index} />;
				})}
			</div>
			<br />
			<h1 className="col">Planets</h1>
			<div className="cplanets d-flex overflow-auto">
				{planets.map((planet, index) => {
					return <PlanetsCard planet={planet} key={index} />;
				})}
			</div>
		</div>
	);
};
