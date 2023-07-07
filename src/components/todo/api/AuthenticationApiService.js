import { apiClient } from "./ApiClient";

// Contact basic auth service to check for valid token
export const executeBasicAuthenticationService
    = (token) => apiClient.get(`/basicauth`, {
        headers: {
            Authorization: token
        }
    });

// Contact basic auth service to check for valid token
export const executeJwtAuthenticationService
= (username, password) => apiClient.post(`/authenticate`, 
    { username, password} // pass user & pass directly in request body
);