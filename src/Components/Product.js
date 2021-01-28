import React from "react";
import { useParams } from "react-router-dom";
import { GetOneProduct } from "./Getproducts";
import Single_product from "./Single_product";
import Result from "../Pages/Result";
import ShowProduct from "../Components/ShowProduct";
function useProductData(productId) {
	const { response: product, loading: productLoading } = GetOneProduct(
		productId
	);
	return {
		product,
		productLoading,
	};
}
function Product() {
	const { productId } = useParams();
	const { product, loading } = useProductData(productId);

	const retrievedItems = loading ? (
		<div className="spinner-border spinner" role="status"></div>
	) : (
		<Single_product data={product} />
	);
	//console.log("product component");
	return (
		<div>
			<Result data={retrievedItems} />
		</div>
	);
}

export default Product;
