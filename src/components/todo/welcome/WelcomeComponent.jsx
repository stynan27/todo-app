import { useParams, Link } from "react-router-dom";

export default function WelcomeComponent() {

    // get URL path params by object deconstruction
    const { username }= useParams();

    console.log(username);

    return (
        <div className="WelcomeComponent">
            <h1>Welcome, {username}!</h1>
            <div>
                {/* Use of Link here to prevent page refresh */}
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
        </div>
    );
}