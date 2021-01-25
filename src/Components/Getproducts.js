import Getproduct from "./Getproduct";
function GetProducts() {
	return Getproduct("/products", "GET");
}

function GetProductsWithLimit(size = 0) {
	return Getproduct(`/products?limit=${size}`, "GET");
}

function GetProductsWithCategory(category) {
	return Getproduct(`/products/category/${category}`, "GET");
}
function GetOneProduct(productId) {
	return Getproduct(`/products/${productId}`, "GET");
}
export {
	GetProducts,
	GetProductsWithLimit,
	GetProductsWithCategory,
	GetOneProduct,
};
