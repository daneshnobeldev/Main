
import { createContext, useCallback, useState } from "react";
import axios from "axios";
const BooksContext = createContext();

function Provider({ children }) {

    const [books, setBooks] = useState([]);

    const createBook = useCallback(async (title) => {
        
        const response = await axios.post("http://localhost:3001/books", { title });
        if (response.statusText === "Created") {
            setBooks([...books, response.data])
        }

    }, [books])
    const deleteBookById = useCallback(async (id) => {
        ;
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        if (response.statusText === "OK") {
            const updatedBooks = books.filter((book) => {
                if (book.id !== id) {
                    return book
                }
            });

            setBooks(updatedBooks)
        }

    }, [books])
    const updateBookById = useCallback(async (id, title) => {
        
        const response = await axios.put(`http://localhost:3001/books/${id}`, { title })
        if (response.status === 200) {
            const updatedBooks = books.map((book) => {
                if (book.id === id) {
                    return { id, title };
                }
                return book;
            })

            setBooks(updatedBooks);
        }
    }, [books]);
    const fetchBooks = useCallback(async () => {
        const response = await axios.get("http://localhost:3001/books");
        console.log(response);
        setBooks(response.data);

    }, [])

    return (
        <BooksContext.Provider value={{
            books,
            createBook,
            updateBookById,
            deleteBookById,
            fetchBooks

        }}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider }
export default BooksContext