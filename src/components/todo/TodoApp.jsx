import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginComponent from "../login/LoginComponent";
import WelcomeComponent from "../welcome/WelcomeComponent";
import ErrorComponent from "../error/ErrorComponent";

import './TodoApp.css';

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent/>}></Route>
                    <Route path="/login" element={<LoginComponent/>}></Route>
                    <Route path="/welcome" element={<WelcomeComponent/>}></Route>
                    {/* All other trafic to error page */}
                    <Route path="*" element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}