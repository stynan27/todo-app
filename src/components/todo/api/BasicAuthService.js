import { apiClient } from "./ApiClient";

// Contact basic auth service to check for valid token
export const executeBasicAuthenticationService
    = (token) => apiClient.get(`/basicauth`, {
        headers: {
            Authorization: token
        }
    });