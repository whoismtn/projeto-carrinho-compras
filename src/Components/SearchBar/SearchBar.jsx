import React, {useContext, useState} from "react";
import {AiOutlineSearch} from "react-icons/ai";
import "./searchbar.css";
import fetchProducts from "../../api/products";
import AppContext from "../../Context/AppContext";

function SearchBar(){
	const [searchValue, setSearchValue] = useState("");
	const {setProducts, setLoading} = useContext(AppContext);

	const handleSearch = async (event) => {
		event.preventDefault();
		setLoading(true);

		const products = await fetchProducts(searchValue);
		setProducts(products);	 
		setLoading(false);
		setSearchValue("");
	};


	return(
		<form className="search-bar" onSubmit={handleSearch}>
			<input 
				type="search" 
				value={searchValue}
				placeholder="Buscar Produtos" 
				className="search-input" 
				onChange={({target}) =>setSearchValue(target.value)} 
				required/>

			<button type="submit" className="search-button">
				<AiOutlineSearch/>
			</button>
		</form>
	);
}

export default SearchBar;