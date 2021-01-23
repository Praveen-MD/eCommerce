import React from "react";
import { Container, Card } from "react-bootstrap";
function Display({ product }) {
	console.log(product);

	return (
		<Card className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
			<Card.Img
				class="card-img-top"
				src={product.image}
				alt="No image available"
				width="250px"
				height="200px"
			/>
			<Card.Body>
				<h6> {product.title}</h6>
				<h6> {product.price}</h6>
			</Card.Body>
		</Card>
	);
}

export default Display;
