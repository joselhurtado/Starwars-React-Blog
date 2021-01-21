import React, { useEffect, useState } from "react";

import "../../styles/home.scss";

export const Home = () => {
	const [characters, setCharacters] = useState([]); //Hooks for characters
	const [planets, setPlanets] = useState([]);
    const [vehicles, setVehicles] = useState([]);
        useEffect(
        () => {
            fetch('http://swapi.dev/api/people/')
                .then(function(response) {
                    if (!response.ok) {
                    throw Error(response.statusText);
                }
                // Read the response as json.
                    return response.json();
                })
                .then(function(responseAsJson) {
                // Do stuff with the JSON
                    setCharacters(responseAsJson.results);
                })
                .catch(function(error) {
                    console.log('Looks like there was a problem: \n', error);
            });

            //Planet Hooks
            fetch('http://swapi.dev/api/planets/')
                .then(function(response) {
                    if (!response.ok) {
                    throw Error(response.statusText);
                }
                // Read the response as json.
                    return response.json();
                })
                .then(function(responseAsJson) {
                // Do stuff with the JSON
                    setPlanets(responseAsJson.results);
                })
                .catch(function(error) {
                    console.log('Looks like there was a problem: \n', error);
            });

            //Vehicles Hooks
            fetch('http://swapi.dev/api/vehicles/')
                .then(function(response) {
                    if (!response.ok) {
                    throw Error(response.statusText);
                }
                // Read the response as json.
                    return response.json();
                })
                .then(function(responseAsJson) {
                // Do stuff with the JSON
                    setVehicles(responseAsJson.results);
                })
                .catch(function(error) {
                    console.log('Looks like there was a problem: \n', error);
            });
        }, []);

	return (
		<div className="text-center mt-5">
			<p />
		</div>
	);
};
