import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//Put state in context

// Share context with other components

export default function AuthProvider({ children }) {

    const [number, setNumber] = useState(0);


    setInterval(() => setNumber(number + 5), 5000 );

    return (
        <AuthContext.Provider value={ { number } }>
            {children}
        </AuthContext.Provider>
    );
}