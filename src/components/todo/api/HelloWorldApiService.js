import axios from 'axios';

// CHANGEME FOR WORK/DESKTOP (localhost/mooseden)
const host = 'mooseden';

// Create an axios configuration which has our baseURL
const apiClient = axios.create(
    {
        baseURL: "http://" + host + ":8080"
    }
)

// alternative "one-liner" to a function
export const retrieveHelloWorldBean 
    = () => apiClient.get("/hello-world-bean");

export const retrieveHelloWorldPathVariable 
    = (name) => apiClient.get(`/hello-world/path-variable/${name}`);