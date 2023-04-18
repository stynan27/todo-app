import { createContext, useState } from "react";

export const AuthContext = createContext();

//Put state in context

// Share context with other components

export default function AuthProvider({ children }) {

    const [number, setNumber] = useState(0);

    return (
        <AuthContext.Provider value={ { number } }>
            {children}
        </AuthContext.Provider>
    );
}