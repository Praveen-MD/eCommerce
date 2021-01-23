import React, { Component } from "react";

class Details extends Component {
	render() {
		return (
			<div className="container">
				<div>
					<header className="jumbotron">
						<h3>
							<strong>UserName</strong> Profile
						</h3>
					</header>
					<p>
						<strong>Welcome</strong>
					</p>
					<p>
						<strong>Id:</strong>{" "}
					</p>
					<p>
						<strong>Email:</strong>{" "}
					</p>
					<strong>Authorities:</strong>
					<ul></ul>
				</div>
			</div>
		);
	}
}

export default Details;
/*
<div>
<h1>Details Page</h1>
</div>
*/
