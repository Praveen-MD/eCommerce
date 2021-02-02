import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

function Result(props) {
	if (props.category != "Products") {
		return (
			<div>
				<h2 style={{ marginLeft: "20px", color: "red" }}>{props.message}</h2>
				<div>{props.data}</div>
			</div>
		);
	}
}

export default Result;
/*
	<h3 style={{ textAlign: "center" }}>Showing {props.category}</h3>*/
