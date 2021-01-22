import React from "react";
import PropTypes from "prop-types";

//characterCards
export function CharactersCard(props) {
	return (
		<div className="card m-2" style={{ minWidth: "18rem" }}>
			<img
				className="card-img-top"
				src="https://www.geekgirlauthority.com/wp-content/uploads/2018/05/7773769005_star-wars.jpg"
				alt="Card image cap"
				width="100px"
				height="auto"
			/>

			{props.character.name ? (
				<div className="card-body justify-content-between">
					<h5 className="card-title">{props.character.name}</h5>
					<p className="card-text">
						<strong>Hair Color:</strong> {""}
						{props.character.hair_color} <br />
						<strong>Height:</strong> {""}
						{props.character.height} <br />
						<strong>Birth Year:</strong> {""}
						{props.character.birth_year} <br />
						<strong>Skin Color:</strong> {""}
						{props.character.skin_color} <br />
						<strong>Eye Color:</strong> {""}
						{props.character.eye_color} <br />
						<strong>Gender:</strong> {""}
						{props.character.gender} <br />
					</p>
					<a id="bottom" href="#" className="btn btn-warning ">
						Learn More
					</a>
					<a href="#" className="btn btn-outline-warning float-right fa fa-heart" />
				</div>
			) : (
				"DATA LOADING..."
			)}
		</div>
	);
}

CharactersCard.propTypes = {
	character: PropTypes.object
};
