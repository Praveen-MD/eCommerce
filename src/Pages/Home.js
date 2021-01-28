import React from "react";

import Getproduct from "../Components/Getproduct";
import Display from "../Components/Display";
import Result from "./Result";
function Home() {
	const { response: products, loading } = Getproduct(
		"/products?limit=2",
		"GET"
	);
	//console.log(products);
	const retrievedItems = loading ? (
		//<img className="spinner" src={spinner} alt="Loading spinner" />
		<div className="spinner-border spinner" role="status"></div>
	) : (
		products.map((product) => <Display product={product} />)
	);
	//console.log(retrievedItems);
	return <Result category="Popular" data={retrievedItems} />;
}

export default Home;
