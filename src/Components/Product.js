import React from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GetOneProduct } from "./Getproducts";
function useProductData(productId, category) {
	const { response: product, loading: productLoading } = GetOneProduct(
		productId
	);

	return {
		product,
		productLoading,
	};
}
function Product(props) {
	const { productId, category } = useParams();
	const { product, loading } = useProductData(productId, category);
	console.log(product);
	if (loading) {
		return (
			<div className="spinner-border" role="status">
				<span class="sr-only">Loading...</span>
			</div>
		);
	}

	return <div></div>;
}

export default Product;
