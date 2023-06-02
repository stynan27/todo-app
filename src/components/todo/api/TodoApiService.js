import axios from 'axios';

// Create an axios configuration which has our baseURL
const apiClient = axios.create(
    {
        baseURL: "http://localhost:8080"
    }
)

export const retrieveAllTodosForUsername 
    = (username) => apiClient.get(`/users/${username}/todos`);