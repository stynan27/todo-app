import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AuthProvider, { useAuth } from './security/AuthContext';
import LoginComponent from "./login/LoginComponent";
import LogoutComponent from "./logout/LogoutComponent";
import ListTodosComponent from "./listTodos/ListTodosComponent";
import WelcomeComponent from "./welcome/WelcomeComponent";
import ErrorComponent from "./error/ErrorComponent";
import HeaderComponent from "./header/HeaderComponent";
//import FooterComponent from "./footer/FooterComponent";

import './TodoApp.css';

// Prevents navigation to unauthorized routes
function AuthenticatedRoute({children}) {
    const authContext = useAuth();

    if (authContext.isAuthenticated)
        return children;
    return <Navigate to="/" /> // redirect to login when accessing unauthorized route

}

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    {/* Place Header/Footer in here for Link component usage */}
                    <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>} />
                        <Route path="/login" element={<LoginComponent/>} />

                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent/>
                            </AuthenticatedRoute>
                        } />

                        <Route path="/todos" element={<ListTodosComponent/>} />

                        {/* /welcome provides path param for username */}
                        <Route path="/welcome/:username" element={
                            <AuthenticatedRoute>
                                <WelcomeComponent/>
                            </AuthenticatedRoute>
                        } />
                        
                        {/* All other trafic to error page */}
                        <Route path="*" element={<ErrorComponent/>} />
                    </Routes>
                    {/* <FooterComponent/> */}
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}