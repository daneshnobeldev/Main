import React, { useContext, useState } from "react";
import BooksContext from "../context/BooksContext";

function BookEdit({book,onSubmit}){
    const {updateBookById} = useContext(BooksContext)
    const [val,setVal] = useState(book.title);
    const handleChange = (event) => {
        setVal(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit()
        updateBookById(book.id,val);
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Edit</label>
            <input className="input" value={val} onChange={handleChange}/>
            <button className="button" type="submit">Save</button>
        </form>
    )
}

export default BookEdit;

