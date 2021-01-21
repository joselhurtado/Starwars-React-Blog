import React from "react";
import PropTypes from "prop-types";

//characterCards
export function CharactersCard(props) {
	return (
		<div className="col-3 mb-2">
			<img
				className="card-img-top"
				src="https://www.geekgirlauthority.com/wp-content/uploads/2018/05/7773769005_star-wars.jpg"
				alt="Card image cap"
				width="100px"
				height="auto"
			/>

			{props.character.name ? (
				<div className="card-body">
					<h5 className="card-title">{props.character.name}</h5>
					<p className="card-text">
						Hair Color: {""}
						{props.character.hair_color} <br />
						Height: {""}
						{props.character.height} <br />
						Birth Year: {""}
						{props.character.birth_year} <br />
						Skin Color: {""}
						{props.character.skin_color} <br />
						Eye Color: {""}
						{props.character.eye_color} <br />
						Gender: {""}
						{props.character.gender} <br />
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

CharactersCard.propTypes = {
	character: PropTypes.object
};
