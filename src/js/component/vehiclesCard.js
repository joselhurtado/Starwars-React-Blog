import React from "react";
import PropTypes from "prop-types";

//vehicleCards
export function VehiclesCard(props) {
	return (
		<div className="card m-2" style={{ minWidth: "18rem" }}>
			<img
				className="card-img-top"
				src="https://www.teamvvv.com/wp-content/uploads/2016/12/rogue_one_vr_mission.jpg"
				alt="Card image cap"
				width="100px"
				height="auto"
			/>

			{props.vehicle.name ? (
				<div className="card-body">
					<h5 className="card-title">{props.vehicle.name}</h5>
					<p className="card-text">
						Model: {""}
						{props.vehicle.model} <br />
						Manufacturer: {""}
						{props.vehicle.manufacturer} <br />
						Length: {""}
						{props.vehicle.length} <br />
						Crew: {""}
						{props.vehicle.crew} <br />
						Passengers: {""}
						{props.vehicle.passengers} <br />
						Cargo Capacity: {""}
						{props.vehicle.cargo_capacity} <br />
					</p>
					<a href="#" className="btn btn-warning">
						Discover More
					</a>
					<a href="#" className="btn btn-outline-warning float-right fa fa-heart" />
				</div>
			) : (
				"DATA LOADING..."
			)}
		</div>
	);
}

VehiclesCard.propTypes = {
	vehicle: PropTypes.object
};
