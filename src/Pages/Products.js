import React from "react";
import { useParams } from "react-router-dom";
import { GetProductsWithCategory } from "../Components/Getproducts";
import Display from "../Components/Display";
import Result from "./Result";
function Products(props) {
	const { category } = useParams();
	const { response: products, loading } = GetProductsWithCategory(category);
	//console.log(products);
	const retrievedItems = loading ? (
		<div className="spinner-border spinner" role="status"></div>
	) : (
		products.map((product) => <Display key={product.id} product={product} />)
	);
	//console.log(retrievedItems);
	return (
		<div>
			<Result category={category} data={retrievedItems} />
		</div>
	);
}

export default Products;
