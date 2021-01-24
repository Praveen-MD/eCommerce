import React from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
	return (
		<div>
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<Link to={"/"} className="navbar-brand">
					My App
				</Link>

				<div className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link to={"/signup"} className="nav-link">
							Sign Up
						</Link>
					</li>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
