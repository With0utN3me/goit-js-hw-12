export default fetchImages;
import {searchParams, baseURL, axios, } from "/main.js"
async function fetchImages() {
        const response = await axios.get(baseURL + searchParams.toString());
        return response.data;
}
