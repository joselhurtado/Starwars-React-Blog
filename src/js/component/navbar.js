import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark" collapseOnSelect>
			<div className="container-fluid" id="responsive-navbar-nav">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img
							src="https://cutewallpaper.org/21/stars-wars-logo/List-of-Star-Wars-films-Wikipedia.png"
							width="auto"
							height="60px"
						/>
					</span>
				</Link>
				<form className="d-flex">
					<input className="form-control m-2" type="search" placeholder="Search" aria-label="Search" />
					<Link to="/demo">
						<button className="btn btn-warning m-2">Favorites</button>
					</Link>
				</form>
			</div>
		</nav>
	);
};
