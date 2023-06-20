import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//Put state in context

// Share context with other components

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false);

    const [username, setUsername] = useState(null);

    function login(username, password) {
        if (username === 'seamus' && password === 'dummy') {
            setAuthenticated(true);
            setUsername(username);
            return true;
        } else {
            setAuthenticated(false);
            setUsername(null);
            return false;
        }
    }

    function logout() {
        setAuthenticated(false);
    }

    // more readible way to export variable names
    const valuesToBeShared = { isAuthenticated, login, logout, username };

    return (
        <AuthContext.Provider value={ valuesToBeShared }>
            {children}
        </AuthContext.Provider>
    );
}