import React from "react";
import { useParams } from "react-router-dom";
import { GetProductsWithCategory } from "./Getproducts";
import spinner from "../assets/ajax-loader.gif";
import { Container, Card } from "react-bootstrap";
import Getproduct from "./Getproduct";
import Display from "./Display";
import Result from "./Result";
function Products(props) {
	const { category } = useParams();

	const { response: products, loading } = GetProductsWithCategory(category);
	const retrievedItems = loading ? (
		<img className="spinner" src={spinner} alt="Loading spinner" />
	) : (
		products.map((product) => (
			<Card key={product.id}>
				<Display product={product} />
			</Card>
		))
	);
	return (
		<div>
			<Result category={category} data={retrievedItems} />
		</div>
	);
}

export default Products;
