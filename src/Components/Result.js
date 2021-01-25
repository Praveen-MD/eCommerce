import React from "react";
import { Container, CardColumns, CardDeck, CardGroup } from "react-bootstrap";
import Footer from "../Footer";
function Result(props) {
	//console.log(props.data);
	//console.log("result");
	return (
		<div>
			<div className="col-lg-12 col-md-6 col-sm-6 col-xs-4">
				<h3>Showing :{props.category}</h3>
				<Container style={{ marginRight: "10px" }}>{props.data}</Container>
			</div>
		</div>
	);
}

export default Result;
/*

<div className="col-lg-12 col-md-6 col-sm-4 col-xs-3">
				<h3 style={{ justifyContent: "center" }}>Showing :{props.category}</h3>
				<Container>{props.data}</Container>
					<Footer />
			</div>

			*/
