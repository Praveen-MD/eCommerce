import React from "react";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";

function Single_product(product) {
	const history = useHistory();
	const navigateUrl = `/products/${product.id}`;
	const clickHandler = () => {
		history.push(navigateUrl, { category: product.category });
	};
	const data = product.data;
	if (data !== null) {
		return (
			<div className="cart">
				<div className="cart-img">
					<img
						className="card-img-top product_image "
						src={product.data.image}
						alt="No image available"
					/>
				</div>
				<div className="cart-details">
					<div>
						<h3> {product.data.description}</h3>
					</div>
				</div>
				<div className="cart-price">
					<div>
						<h2> Cost : $ {product.data.price}</h2>
					</div>{" "}
					<button>
						<i className="fa fa-shopping-cart" style={{ fontSize: "70px" }}></i>{" "}
						ADD
					</button>
				</div>
			</div>
		);
	} else {
		return <div className="spinner-border spinner" role="status"></div>;
	}
}

export default Single_product;

/*
<button>
						ADD
						<i
							style={{ fontSize: "100px", color: "red" }}
							className="fa fa-shopping-cart"
						></i>
					</button>
					*/
