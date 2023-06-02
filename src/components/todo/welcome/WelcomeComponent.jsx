import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import { retrieveHelloWorldBean, retrieveHelloWorldPathVariable } from "../api/HelloWorldApiService";


export default function WelcomeComponent() {

    // get URL path params by object deconstruction
    const { username } = useParams();

    const [message, setMessage] = useState(null);

    function callHelloWorldRestAPI(){
        console.log('called');
        
        //axios call to invoke Spring Boot Rest API
        retrieveHelloWorldBean()
            .then((resp) => successfulResponse(resp))
            .catch((error) => errorResponse(error))
            .finally( () => console.log('cleanup'));

        retrieveHelloWorldPathVariable("Seamus")
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