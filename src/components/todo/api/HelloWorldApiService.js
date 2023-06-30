import { apiClient } from './ApiClient';

// alternative "one-liner" to a function
// export const retrieveHelloWorldBean 
//     = () => apiClient.get("/hello-world-bean");

export const retrieveHelloWorldPathVariable 
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`);