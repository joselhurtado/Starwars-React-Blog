import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://cutewallpaper.org/21/stars-wars-logo/List-of-Star-Wars-films-Wikipedia.png"
						width="auto"
						height="80px"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-warning">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
