import React from "react";
import { Container, Card, CardGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Display({ product }) {
	//console.log(product);
	const history = useHistory();
	const navigateUrl = `/${product.category}/${product.id}`;
	const clickHandler = () => {
		history.push(navigateUrl);
	};

	return (
		<a style={{ cursor: "pointer" }} onClick={clickHandler}>
			<Card className="card_disp  col-lg-4 col-md-6 col-sm-12">
				<Card.Img
					className="card-img-top card_image "
					src={product.image}
					alt="No image available"
				/>
				<Card.Body>
					<p> {product.title}</p>
					<p> Cost : $ {product.price}</p>
				</Card.Body>
			</Card>
		</a>
	);
}

export default Display;
