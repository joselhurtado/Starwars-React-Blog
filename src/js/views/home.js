import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { CharacterCard } from "../component/charactersCard";
import { PlanetCard } from "../component/planetsCard";
import { VehicleCard } from "../component/vehiclesCard";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-md" style={{ minWidth: "75%", margin: "25px", padding: "10px" }}>
			<h1 className="col">Characters</h1>
			<div className="character d-flex overflow-auto">
				{store.character.map((character, index) => {
					return <CharacterCard character={character} key={index} />;
				})}
			</div>
			<br />
			<br />
			<h1 className="col">Planets</h1>
			<div className="planet d-flex overflow-auto">
				{store.planet.map((planet, index) => {
					return <PlanetCard planet={planet} key={index} />;
				})}
			</div>
			<br />
			<br />
			<h1 className="col">Vehicles</h1>
			<div className="vehicle d-flex overflow-auto">
				{store.vehicle.map((vehicle, index) => {
					return <VehicleCard vehicle={vehicle} key={index} />;
				})}
			</div>
			<br />
		</div>
	);
};
