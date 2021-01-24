import React from "react";
import spinner from "../assets/ajax-loader.gif";
import { Container, Card } from "react-bootstrap";
import Getproduct from "./Getproduct";
import Display from "./Display";
import Result from "./Result";
function Home() {
	const { response: products, loading } = Getproduct(
		"/products?limit=5",
		"GET"
	);
	//console.log(products);
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
			<Result category="Popular" data={retrievedItems} />
		</div>
	);
}

export default Home;
