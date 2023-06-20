import axios from 'axios';

// CHANGEME FOR WORK/DESKTOP (localhost/mooseden)
const host = 'mooseden';

// Create an axios configuration which has our baseURL
const apiClient = axios.create(
    {
        baseURL: "http://" + host + ":8080"
    }
)

export const retrieveAllTodosForUsernameApi 
    = (username) => apiClient.get(`/users/${username}/todos`);

export const retrieveTodoForUsernameApi 
    = (username) => apiClient.get(`/users/${username}/todos`);

export const deleteTodoApi 
    = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`);