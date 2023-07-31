import React, { useContext } from "react";
import propTypes from "prop-types";
import "./productcard.css";
import {BsCartPlus} from "react-icons/bs";
import AppContext from "../../Context/AppContext";

function ProductCard({data}){

	const {title, thumbnail, price}  = data;
	const {cartItems,setCartItems } = useContext(AppContext);

	const handleAddCart = () => {
		
		setCartItems([...cartItems,data]);
	};

	return(
		<section className='productCard'>
			<img src={thumbnail.replace(/\w\.jpg/gi,"W.jpg ")} alt="imagem do produto" className="card-image"/>
			<div className="card-info">
				<h2 className="card-price">{price.toLocaleString("pt-br",{
					style:"currency",
					currency:"BRL"
				})}</h2>
				<h2 className="card-title">{title}</h2>
			</div>
			<button type="button" className="button-addcart" onClick={handleAddCart}>
				<BsCartPlus/>
			</button>
		</section>
	);
}

export default ProductCard;

ProductCard.propTypes ={
	data: propTypes.shape({}),
}.isRequired;