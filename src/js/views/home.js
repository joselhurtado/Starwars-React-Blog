import React, { useEffect, useState } from "react";
import { CharacterCard } from "../component/charactersCard";

import "../../styles/home.scss";

export const Home = () => {
	const [characters, setCharacters] = useState([]); //Hooks for characters
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	useEffect(() => {
		fetch("http://swapi.dev/api/people/") //API for People
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
		fetch("http://swapi.dev/api/planets/") //API for Planets
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
		fetch("http://swapi.dev/api/vehicles/") //API for Vehicles
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
		<div className="card mb-5">
			<img
				className="card-img-top"
				src="https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
				alt="Card image cap"
			/>

			<div className="card-body">
				<h5 className="card-title" />
				<p className="card-text" />
				<a href="#" className="btn btn-primary">
					Read More
				</a>
			</div>
		</div>
	);
};
