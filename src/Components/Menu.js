import React from "react";
import { Link } from "react-router-dom";
function Menu(props) {
	return (
		<div>
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<div className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link
							to={{ pathname: "/jewelery", state: { category: "jewelery" } }}
							className="nav-link"
						>
							Jewellery
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to={{
								pathname: "/electronics",
								state: { category: "electronics" },
							}}
							className="nav-link"
						>
							Electronics
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to={{
								pathname: "/men clothing",
								state: { category: "men clothing" },
							}}
							className="nav-link"
						>
							Men clothing
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to={{
								pathname: "/women clothing",
								state: { category: "women clothing" },
							}}
							className="nav-link"
						>
							Women clothing
						</Link>
					</li>
				</div>
			</nav>
		</div>
	);
}

export default Menu;
