import React from "react";
import { Container, Card } from "react-bootstrap";
import Display from "./Display";
import Result from "./Result";
function TopProducts({ products }) {
	console.log(products);

	return (
		<div className="Container">
			{products.map((product) => (
				<Card key={product.id} container item xs={4} spacing={1}>
					<Display product={product} />
				</Card>
			))}
		</div>
	);
}

export default TopProducts;

/*
<div className="container">
			{products.map((product) => (
				<Card
					className="col-lg-4 col-md-6 col-sm-6 col-xs-12"
					style={{
						width: "350px",
						height: "350px",
						padding: "20px",
						float: "left",
						marginRight: "10px",
						marginTop: "10px",
					}}
				>
					<Card.Img
						class="card-img-top"
						src={product.image}
						alt="No image available"
						width="300px"
						height="250px"
					/>
					<Card.Body>
						<h2>Title</h2>
						<h6> {product.title}</h6>
						<h6> {product.price}</h6>
					</Card.Body>
				</Card>
			))}*/
