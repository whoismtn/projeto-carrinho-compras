import React, { useContext } from "react";
import "./cartbutton.css";
import {AiOutlineShoppingCart} from "react-icons/ai";
import AppContext from "../../Context/AppContext";

function CartButton(){

	const {cartItems,isCartVisible, setIsCartVisible} = useContext(AppContext);

	return(
		<button type="button" className="cart-button" onClick={() => setIsCartVisible(!isCartVisible)}>
			<AiOutlineShoppingCart/>
			<span className="card-status">{cartItems.length}</span>

      
		</button>
	);
}

export default CartButton;