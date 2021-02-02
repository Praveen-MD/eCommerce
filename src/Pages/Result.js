import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

function Result(props) {
	if (props.category != "Products") {
		return (
			<div>
				<Container>{props.data}</Container>
			</div>
		);
	}
}

export default Result;
/*
	<h3 style={{ textAlign: "center" }}>Showing {props.category}</h3>*/
