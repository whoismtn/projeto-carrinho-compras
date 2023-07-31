import React from "react";
import propTypes from "prop-types";
import "./cartitem.css";
import{CiCircleRemove} from "react-icons/ci";

function CartItem({data}){

	const {thumbnail, title, price} = data;

	return(
		<section className="cart-item">
			<img src={thumbnail} alt="imagem do produto" className="cart-item-image" />
			<div className="cart-item-content">
				<h3 className="cart-item-title">{title}</h3>
				<h3 className="cart-item-price">{price.toLocaleString("pt-br",{
					style:"currency",
					currency:"BRL"
				})}</h3>
				<button type="button" className="button-remove-item">
					<CiCircleRemove/>
				</button>
			</div>
		</section>
	);
}

export default CartItem;

CartItem.propTypes = {
	data: propTypes.object
}.isRequired;