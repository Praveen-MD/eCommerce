import React from "react";
import { useParams } from "react-router-dom";
import { GetProductsWithCategory } from "./Getproducts";
import spinner from "../assets/ajax-loader.gif";
import { Container, Card, Spinner } from "react-bootstrap";
import Getproduct from "./Getproduct";
import Display from "./Display";
import Result from "./Result";
function Products(props) {
	const { category } = useParams();

	const { response: products, loading } = GetProductsWithCategory(category);
	const retrievedItems = loading ? (
		<div class="spinner-border" role="status">
			<span class="sr-only">Loading...</span>
			console.log("success")
		</div>
	) : (
		products.map((product) => <Display key={product.id} product={product} />)
	);
	return (
		<div>
			<Result category={category} data={retrievedItems} />
		</div>
	);
}

export default Products;
