import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import LoginComponent from "../login/LoginComponent";
import ListTodosComponent from "../listTodos/ListTodosComponent";
import WelcomeComponent from "../welcome/WelcomeComponent";
import ErrorComponent from "../error/ErrorComponent";

import './TodoApp.css';

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent/>} />
                    <Route path="/login" element={<LoginComponent/>} />
                    <Route path="/todos" element={<ListTodosComponent/>} />
                    {/* /welcome provides path param for username */}
                    <Route path="/welcome/:username" element={<WelcomeComponent/>} />
                    {/* All other trafic to error page */}
                    <Route path="*" element={<ErrorComponent/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}