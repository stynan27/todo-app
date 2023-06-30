import { createContext, useState, useContext } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//Put state in context

// Share context with other components

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false);

    const [username, setUsername] = useState(null);

    const [token, setToken] = useState(null);

    async function login(username, password) {

        // Create Basic Auth Token using Base64 encoding of username + passw
        const basicAuthToken =  'Basic ' + window.btoa(username + ':' + password)

        try {
            // wait for response to return before continuing execution
            const response = await executeBasicAuthenticationService(basicAuthToken);

            if (response.status === 200) {
                setAuthenticated(true);
                setUsername(username);
                setToken(basicAuthToken);

                // Configure basic auth for ALL endpoints with axios
                // (Adds Basic Auth header to ALL endpoints)
                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('interceptor adding a token')

                        config.headers.Authorization = basicAuthToken

                        return config;
                    }
                )

                return true;
            } else {
                logout();
                return false;
            }
        } catch(error) {
            logout();
            return false;
        }

    }

    function logout() {
        setAuthenticated(false);
        setUsername(null);
        setToken(null);
    }

    // more readible way to export variable names
    const valuesToBeShared = { isAuthenticated, login, logout, username, token };

    return (
        <AuthContext.Provider value={ valuesToBeShared }>
            {children}
        </AuthContext.Provider>
    );
}