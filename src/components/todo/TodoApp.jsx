import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import LoginComponent from "../login/LoginComponent";
import LogoutComponent from "../logout/LogoutComponent";
import ListTodosComponent from "../listTodos/ListTodosComponent";
import WelcomeComponent from "../welcome/WelcomeComponent";
import ErrorComponent from "../error/ErrorComponent";
import HeaderComponent from "../header/HeaderComponent";
import FooterComponent from "../footer/FooterComponent";

import './TodoApp.css';

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <HeaderComponent/>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent/>} />
                    <Route path="/login" element={<LoginComponent/>} />
                    <Route path="/logout" element={<LogoutComponent/>} />
                    <Route path="/todos" element={<ListTodosComponent/>} />
                    {/* /welcome provides path param for username */}
                    <Route path="/welcome/:username" element={<WelcomeComponent/>} />
                    {/* All other trafic to error page */}
                    <Route path="*" element={<ErrorComponent/>} />
                </Routes>
            </BrowserRouter>

            <FooterComponent/>
        </div>
    );
}