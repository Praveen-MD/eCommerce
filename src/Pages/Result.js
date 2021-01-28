import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
function Result(props) {
	if (props.category != "Products") {
		return (
			<div>
				<div className="col-lg-12 col-md-6 col-sm-6 col-xs-4  ">
					<h3 style={{ textAlign: "center" }}>Showing {props.category}</h3>
					<Container className="my_container">{props.data}</Container>
				</div>
			</div>
		);
	}
}

export default Result;
/*

<div className="col-lg-12 col-md-6 col-sm-4 col-xs-3">
				<h3 style={{ justifyContent: "center" }}>Showing :{props.category}</h3>
				<Container>{props.data}</Container>
					<Footer />
			</div>
<h3 style={{ textAlign: "center" }}>Showing :{props.category}</h3>
style={{ marginLeft: "180px" }
			*/
