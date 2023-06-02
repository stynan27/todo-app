import { useState } from "react";
import { retrieveAllTodosForUsername } from "../api/TodoApiService";
import { useEffect } from "react";

export default function ListTodosComponent() {

    //const today = new Date();
    //const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());
    
    const [todos, setTodos] = useState([]);

    // GET ALL TODOS for given username
    // useEffect HOOK - Allows you to perform side-effects in function components
    // Examples of side-effects include: fetching data, changing the DOM, & setting up subscriptions
    // Combination of the lifecycle hooks: componentDidMount, componentDidUpdate, & componentWillUnmount combined.
    useEffect(
        () => {
            refreshTodos()
        }, []
    )

    function refreshTodos() {
        retrieveAllTodosForUsername('Seamus')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="container">
           <h1>Things you want To Do!</h1>
           <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>Is Done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                    {/* Programmatically show dynamic list of todos */}
                    {/* Maps each Todo to JSX expression */}
                    {/* Don't forget a unique key="" identifier for each DOM element! */}
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
           </div>
        </div>
    );
}