import axios from 'axios'; 
import { auth } from './secrets';

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: `Client-ID ${auth}`
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;