import React from "react";
import PropTypes from "prop-types";

//characterCards
export function CharactersCard(props) {
	return (
		<div className="card mb-5">
			<img
				className="card-img-top"
				src="https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
				alt="Card image cap"
			/>

			{props.character.name ? (
				<div className="card-body">
					<h5 className="card-title">{props.character.name}</h5> <br />
					<p className="card-text">
						Hair Color
						{props.character.hair_color} <br />
						Height
						{props.character.height} <br />
						Birth Year
						{props.character.birth_year} <br />
						Skin Color
						{props.character.skin_color} <br />
						Eye Color
						{props.character.eye_color} <br />
					</p>
					<a href="#" className="btn btn-primary">
						Read More
					</a>
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
