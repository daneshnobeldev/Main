import SearchBar from "./components/SearchBar";
import searchPhotos from "./api/Photos";
import { useState } from "react";
import ImageList from "./components/ImageList";
function App() {

    const [photos,setPhotos] = useState([]);
    const handleSubmit = async (event,searchTerm) => {
        event.preventDefault()
        console.log(searchTerm)
        const photosResponse = await searchPhotos(searchTerm);
        setPhotos(photosResponse);
    }
    return (
        <div>
            <h1>Search Pics</h1>
            <SearchBar onSubmit={handleSubmit} />
             <ImageList images={photos} />
        </div>
    )
}

export default App;