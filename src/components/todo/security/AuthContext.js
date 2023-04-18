import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//Put state in context

// Share context with other components

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false);

    function login(username, password) {
        if (username === 'seamus' && password === 'dummy') {
            setAuthenticated(true);
            return true;
        } else {
            setAuthenticated(false);
            return false;
        }
    }

    function logout() {
        setAuthenticated(false);
    }

    // more readible way to export variable names
    const valuesToBeShared = { isAuthenticated, login, logout };

    return (
        <AuthContext.Provider value={ valuesToBeShared }>
            {children}
        </AuthContext.Provider>
    );
}