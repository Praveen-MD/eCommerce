import React from "react";
import spinner from "../assets/ajax-loader.gif";
import { Container, Card } from "react-bootstrap";
import TopProducts from "./TopProducts";
import Getproduct from "./Getproduct";
import Display from "./Display";
import Result from "./Result";
function Home(props) {
	const { response: products, loading } = Getproduct(
		"/products?limit=5",
		"GET"
	);
	const retrievedItems = loading ? (
		<img
			className="spinner"
			src={spinner}
			alt="Loading spinner"
			marginRight="10px"
		/>
	) : (
		products.map((product) => (
			<Card key={product.id} container item xs={4} spacing={1}>
				<Display product={product} />
			</Card>
		))
	);
	return (
		<div>
			<Result data={retrievedItems} />
		</div>
	);
}

export default Home;
