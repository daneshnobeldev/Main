
import React, { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/BooksContext";

function BookShow({book}) {

    const {deleteBookById} = useContext(BooksContext)
    const [showEdit,setShowEdit] = useState(false);
    const handleDelete = () =>{
        deleteBookById(book.id);
    }

    const handleEdit = () => {
        setShowEdit(!showEdit)
    }
    const handleSubmit = () => {
        setShowEdit(false);
    }
    
    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit book={book} onSubmit={handleSubmit} />
    }
    else{
        content =  <h3>{book.title}</h3>
    }

    return (
        <div className="book-show" key={book.id}>
            <img
            alt="books"
            src={`https://picsum.photos/seed/${book.id}/300/200`}
            />
           {content}
            <div className="actions">
              <button onClick={handleEdit} className="edit">Edit</button>
                <button className="delete" onClick={handleDelete}>Delete</button>
            </div>
        </div>

    )
}

export default BookShow;