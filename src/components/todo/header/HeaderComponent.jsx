import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../security/AuthContext";

export default function HeaderComponent() {

    const authContext = useContext(AuthContext);

    console.log(authContext.number)

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a href="https://github.com/stynan27" className="navbar-brand ms-2 fs-2 fw-bold text-black">
                            stynan27@GitHub
                        </a>

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    {/* Use of link component here for local routing */}
                                    <Link to="/welcome/seamus" className="nav-link">
                                    Home
                                    </Link>
                                </li>
                                <li className="nav-item fs-5">
                                    <Link to="/todos" className="nav-link">
                                    Todos
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                <Link className="nav-link" to="/login">
                                Login
                                </Link>
                            </li>
                            <li className="nav-item fs-5">
                                <Link className="nav-link" to="/logout">
                                Logout
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}