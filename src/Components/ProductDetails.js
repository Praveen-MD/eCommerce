import React from "react";

function ProductDetails(props) {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>Product Details</h1>
			<div className="gallery">{props.product}</div>
		</div>
	);
}

export default ProductDetails;
