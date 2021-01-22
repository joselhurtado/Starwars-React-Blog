import React from "react";
import PropTypes from "prop-types";

//vehicleCards
export function VehiclesCard(props) {
	return (
		<div className="card m-2" style={{ minWidth: "15rem" }}>
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
						UID:
						{""}
						{props.vehicle.uid} <br />
					</p>
					<a href="#" className="btn btn-warning">
						Discover More More
					</a>
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
