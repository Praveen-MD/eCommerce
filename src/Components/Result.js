import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
function Result(props) {
	//console.log(props.data);
	//console.log("result");
	return (
		<div className="Container" style={{ margin: "20px" }}>
			<h3>Showing Results : {props.category}</h3>
			<div>{props.data}</div>:
			<Footer />
		</div>
	);
}

export default Result;
