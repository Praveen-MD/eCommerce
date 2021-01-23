import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
function Result(props) {
	console.log(props.data);
	console.log("result");
	return (
		<div className="Container">
			<h3>Top products</h3>
			<div
				class="card-deck"
				style={{
					float: "left",

					marginTop: "5px",
				}}
			>
				<div>{props.data}</div>:
			</div>
		</div>
	);
}

export default Result;
