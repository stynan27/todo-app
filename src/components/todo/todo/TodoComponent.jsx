import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../security/AuthContext";
import { retrieveTodoApi } from "../api/TodoApiService";


export default function TodoComponent() {
    
    // retrieve passed URL param id from react router
    const { id } = useParams();
    const authContext = useAuth();
    const username = authContext.username;

    useEffect(
        () => retrieveTodo(),
        [id]
    );

    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState('');

    function retrieveTodo() {

        retrieveTodoApi(username, id)
        .then(response => {
            setDescription(response.data.description);
            setTargetDate(response.data.targetDate);
        })
        .catch(error => console.log(error));
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                Description: { description }
            </div>           
            <div>
                Target Date: { targetDate }
            </div>
        </div>
    )
}