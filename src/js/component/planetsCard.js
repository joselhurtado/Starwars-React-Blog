import React from "react";
import PropTypes from "prop-types";

//planetCards
export function PlanetsCard(props) {
	return (
		<div className="card m-2" style={{ minWidth: "18rem" }}>
			<img
				className="card-img-top"
				src="https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg"
				alt="Card image cap"
				width="100px"
				height="auto"
			/>

			{props.planet.name ? (
				<div className="card-body">
					<h5 className="card-title">{props.planet.name}</h5>
					<p className="card-text">
						Rotation Period: {""}
						{props.planet.rotation_period} <br />
						Orbital Period: {""}
						{props.planet.orbital_period} <br />
						Diameter: {""}
						{props.planet.diameter} <br />
						Climate: {""}
						{props.planet.climate} <br />
						Gravity: {""}
						{props.planet.gravity} <br />
						Terrain: {""}
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

PlanetsCard.propTypes = {
	planet: PropTypes.object
};
