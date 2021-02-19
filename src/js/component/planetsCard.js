import React from "react";
import PropTypes from "prop-types";
import planetsSw from "../../img/Planets_SW.jpg";

//planetCards
export function PlanetCard(props) {
	return (
		<div className="card m-2" style={{ minWidth: "18rem" }}>
			<img className="card-img-top" src={planetsSw} alt="Card image cap" width="100px" height="auto" />

			{props.planet.name ? (
				<div className="card-body justify-content-between">
					<h5 className="card-title">{props.planet.name}</h5>
					<p className="card-text">
						<strong>Rotation Period:</strong> {""}
						{props.planet.rotation_period} <br />
						<strong>Orbital Period:</strong> {""}
						{props.planet.orbital_period} <br />
						<strong>Diameter:</strong> {""}
						{props.planet.diameter} <br />
						<strong>Climate:</strong> {""}
						{props.planet.climate} <br />
						<strong>Gravity:</strong> {""}
						{props.planet.gravity} <br />
						<strong>Terrain:</strong> {""}
						{props.planet.terrain} <br />
					</p>
					<a href="#" className="btn btn-warning">
						Explore More
					</a>
					<a href="#" className="btn btn-outline-warning float-right fa fa-heart" />
				</div>
			) : (
				"DATA LOADING..."
			)}
		</div>
	);
}

PlanetCard.propTypes = {
	planet: PropTypes.object
};
