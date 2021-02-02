import Getproduct from "./Getproduct";
//import Getproduct2 from "./Getproduct2";

function GetProducts() {
	return Getproduct("/products", "GET");
}
function GetOneProduct(productId) {
	return Getproduct(`/products/${productId}`, "GET");
}
function GetProductsWithLimit(size = 0) {
	return Getproduct(`/products?limit=${size}`, "GET");
}

function GetProductsWithCategory(category) {
	return Getproduct(`/products/category/${category}`, "GET");
}

export {
	GetProducts,
	GetProductsWithLimit,
	GetProductsWithCategory,
	GetOneProduct,
};
