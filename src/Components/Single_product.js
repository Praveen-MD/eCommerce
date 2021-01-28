import React from "react";
import { Card } from "react-bootstrap";
function Single_product(product) {
	const data = product.data;
	//console.log(product);
	//if (data !== null) console.log(product.data.image);
	//else console.log(data);
	if (data !== null) {
		return (
			<div className=" align-items-center">
				<Card
					className="card_disp  col-lg-4 col-md-6 col-sm-12  align-items-center "
					style={{
						backgroundColor: "blue",
					}}
				>
					<Card.Img
						className="card-img-top card_image "
						//src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
						src={product.data.image}
						alt="No image available"
					/>
					<Card.Body>
						<h6> {product.data.title}</h6>
						<p> Cost : $ {product.data.price}</p>
					</Card.Body>
				</Card>
			</div>
		);
	} else {
		return <div className="spinner-border spinner" role="status"></div>;
	}
}

export default Single_product;
/*
<Card
			className="card_disp  col-lg-4 col-md-6 col-sm-12  align-items-center "
			style={{
				backgroundColor: "grey",
			}}
		>
			<Card.Img
				className="card-img-top card_image "
				//src={product.data.image}
				alt="No image available"
			/>
			<Card.Body>
				<h6> {product.data.title}</h6>
				<p> Cost : $ {product.data.price}</p>
			</Card.Body>
		</Card>
            */
