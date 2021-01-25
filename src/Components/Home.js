import React from "react";
import spinner from "../assets/ajax-loader.gif";
import { Container, Card, Spinner } from "react-bootstrap";
import Getproduct from "./Getproduct";
import Display from "./Display";
import Result from "./Result";
function Home() {
	const { response: products, loading } = Getproduct(
		"/products?limit=2",
		"GET"
	);
	//console.log(products);
	const retrievedItems = loading ? (
		//<img className="spinner" src={spinner} alt="Loading spinner" />
		<div class="spinner-border" role="status">
			<span class="sr-only">Loading...</span>
		</div>
	) : (
		products.map((product) => <Display product={product} />)
	);
	return <Result category="Popular" data={retrievedItems} />;
}

export default Home;
