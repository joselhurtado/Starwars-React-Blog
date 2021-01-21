import React from "react";
import PropTypes from "prop-types";

//planetCards
export function PlanetsCard(props) {
	return (
		<div className="col-3 mb-2">
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
						UID:
						{""}
						{props.planet.uid} <br />
					</p>
					<a href="#" className="btn btn-warning">
						Read More
					</a>
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
