import axios from "axios";

const searchPhotos = async (searchTerm) => {

    const response = await axios.get('https://api.unsplash.com/search/photos',
        {
            headers: {
                'Authorization': 'Client-ID KRm3pzv5gYFn08Zk9iI7p8gaB_qqrBwMFz5yu1JStZU'
            },
            params: {
                query: searchTerm
            }
        })

    console.log(response);
    return response.data.results;


}

export default searchPhotos;