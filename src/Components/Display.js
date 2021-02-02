import React from "react";
import { Container, Card, CardGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Display({ product }) {
	//console.log(product);
	const history = useHistory();
	const navigateUrl = `/products/${product.id}`;

	const clickHandler = () => {
		history.push(navigateUrl, { category: product.category });
	};

	return (
		<div>
			<a style={{ cursor: "pointer" }} onClick={clickHandler}>
				<Card className="card_disp col-lg-4 col-md-6 col-sm-12  align-items-center ">
					<Card.Img
						className="card-img-top card_image "
						src={product.image}
						alt="No image available"
					/>
					<Card.Body>
						<h6> {product.title}</h6>
						<p> Cost : $ {product.price}</p>
					</Card.Body>
				</Card>
			</a>
		</div>
	);
}

export default Display;
