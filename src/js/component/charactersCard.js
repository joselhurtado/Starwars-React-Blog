import React from "react";
import PropTypes from "prop-types";

//characterCards
export function CharactersCards(props) {
	return (
		<div className="card mb-5">
			<img
				className="card-img-top"
				src="https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
				alt="Card image cap"
			/>

			<div className="card-body">
				<h5 className="card-title"></h5>
				<p className="card-text"></p>
				<a href="#" className="btn btn-primary">
					Read More
				</a>
			</div>
		</div>
	);
}