import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<div>
				<p
					style={{
						backgroundColor: "black",
						color: "white",
						width: "100%",
						height: "50px",
					}}
				>
					&copy; Copyright 2021. All Rights Reserved.
				</p>
			</div>
		);
	}
}

export default Footer;
