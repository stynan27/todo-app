import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import { retrieveHelloWorldPathVariable } from "../api/HelloWorldApiService";
import { useAuth } from "../security/AuthContext";


export default function WelcomeComponent() {

    // get URL path params by object deconstruction
    const { username } = useParams();

    const authContext = useAuth();

    const [message, setMessage] = useState(null);

    function callHelloWorldRestAPI(){
        console.log('called');
        
        //axios call to invoke Spring Boot Rest API
        retrieveHelloWorldPathVariable(username, authContext.token)
            .then((resp) => successfulResponse(resp))
            .catch((error) => errorResponse(error))
            .finally( () => console.log('cleanup'));
    }

    function successfulResponse(response) {
        console.log(response);
        setMessage(response.data.message);
    }

    function errorResponse(error) {
        console.log(error);
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome, {username}!</h1>
            <div>
                {/* Use of Link here to prevent page refresh */}
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestAPI}>
                    Call Hello World
                </button>
            </div>
            <div className="text-info">
            {message}
            </div>
        </div>
    );
}