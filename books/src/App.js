import React, { useEffect, useContext } from "react";

import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import BooksContext from "./context/BooksContext";
function App() {


    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => {
        fetchBooks()
    }, [fetchBooks])

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />

        </div>
    )
}

export default App;