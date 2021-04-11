import axios from "axios";
// base URL to make requests to the movie api.
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;