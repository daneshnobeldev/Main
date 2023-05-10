import React, { useState } from "react";

function SearchBar({onSubmit}){
const [searchTerm,setSearchTerm] = useState('');
const handleClick = (event) =>{
    onSubmit(event,searchTerm);
}

const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
}
 return(
    <form onSubmit={handleClick}>
       <h3>Search</h3>
       <input type="text" value={searchTerm} onChange={updateSearchTerm} /> 
    </form>
 )
}

export default SearchBar