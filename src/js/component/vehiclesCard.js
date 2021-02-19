import React from "react";
import PropTypes from "prop-types";
import vehiclesSw from "../../img/Vehicles_SW.jpg";

//vehicleCards
export function VehicleCard(props) {
	return (
		<div className="card m-2" style={{ minWidth: "18rem" }}>
			<img className="card-img-top" src={vehiclesSw} alt="Card image cap" width="100px" height="auto" />

			{props.vehicle.name ? (
				<div className="card-body justify-content-between">
					<h5 className="card-title">{props.vehicle.name}</h5>
					<p className="card-text">
						<strong>Model:</strong> {""}
						{props.vehicle.model} <br />
						<strong>Manufacturer:</strong> {""}
						{props.vehicle.manufacturer} <br />
						<strong>Length:</strong> {""}
						{props.vehicle.length} <br />
						<strong>Crew:</strong> {""}
						{props.vehicle.crew} <br />
						<strong>Passengers:</strong> {""}
						{props.vehicle.passengers} <br />
						<strong>Cargo Capacity:</strong> {""}
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

VehicleCard.propTypes = {
	vehicle: PropTypes.object
};
