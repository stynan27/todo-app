import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginComponent from "../login/LoginComponent";
import WelcomeComponent from "../welcome/WelcomeComponent";

import './TodoApp.css';

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent/>}></Route>
                    <Route path="/login" element={<LoginComponent/>}></Route>
                    <Route path="/welcome" element={<WelcomeComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}