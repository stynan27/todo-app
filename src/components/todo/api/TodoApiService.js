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

export const retrieveTodoApi 
    = (username, id) => apiClient.get(`/users/${username}/todos/${id}`);

export const deleteTodoApi 
    = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`);

export const updateTodoApi 
    = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo)

export const createTodoApi 
    = (username, todo) => apiClient.post(`/users/${username}/todos`, todo);

