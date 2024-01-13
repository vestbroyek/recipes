import axios from 'axios'; 
import { auth } from './secrets';

const searchImages = async (term, num_results) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: `Client-ID ${auth}`
        },
        params: {
            query: term,
            per_page: num_results
        }
    });

    return response.data.results;
};

export default searchImages;