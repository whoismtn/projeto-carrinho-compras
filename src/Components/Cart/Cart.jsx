import React, { useContext } from "react";
import "./cart.css";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../Context/AppContext";

function Cart (){

	const {cartItems,isCartVisible} = useContext(AppContext);
	const totalPrice = cartItems.reduce((acc, item) => {
		return  item.price + acc;
	}, 0);

	return(
		<section className={`cart ${isCartVisible ? "cart--active" : ""}`}>
			<div className="cart-items">
				{
					cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>)
				}

			</div>
			<div className="card-resume">{totalPrice.toLocaleString("pt-br",{
				style:"currency",
				currency:"BRL"
			})}</div>
      
		</section>
	);
}

export default Cart;