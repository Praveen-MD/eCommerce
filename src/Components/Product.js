import React from "react";
import { useParams } from "react-router-dom";
import { GetOneProduct, GetProductsWithCategory } from "./Getproducts";
import Single_product from "./Single_product";
import Result from "../Pages/Result";

import ProductDetails from "./ProductDetails";
import Display from "./Display";
import Suggetions from "./Suggetions";
var category = "product";

function useProductData(productId) {
	const { response: product, loading: productLoading } = GetOneProduct(
		productId
	);
	//var category = product.category;
	console.log(product.category);
	return {
		product,
		productLoading,
	};
}
function Product() {
	const { productId } = useParams();

	const { response: product } = GetOneProduct(productId);
	if (product) {
		console.log("TRUE");
		category = product.category;
	}
	console.log(category);
	var retrievedItems = product;
	var { response: products } = GetProductsWithCategory(category);
	if (product || products) {
		products = products.filter(({ id }) => id !== product.id);
		retrievedItems = products.map((product) => (
			<Display message="Loading" key={product.id} product={product} />
		));
	}

	return (
		<div>
			<Single_product data={product} />
			<Suggetions message="Similar Products" data={retrievedItems} />
		</div>
	);
}

export default Product;
/*

import React from "react";
import { useParams } from "react-router-dom";
import { GetOneProduct, GetProductsWithCategory } from "./Getproducts";
import Single_product from "./Single_product";
import Result from "../Pages/Result";
import ShowProduct from "../Components/ShowProduct";
import ProductDetails from "./ProductDetails";
import Display from "./Display";

function Product() {
	const { productId, category } = useParams();

	const { product } = GetOneProduct(productId);

	const { products } = GetProductsWithCategory(category);
	const retrievedItems = products.map((product) => (
		<Display key={product.id} product={product} />
	));
	return (
		<div>
			<Single_product data={product} />
			<Result data={retrievedItems} />
		</div>
	);
}
 data={retrievedItems}
data={retrievedItems.filter(({ id }) => id !== product.id)}
export default Product;
*/
