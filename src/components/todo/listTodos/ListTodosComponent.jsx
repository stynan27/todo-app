import { useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "../api/TodoApiService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../security/AuthContext";

export default function ListTodosComponent() {

    //const today = new Date();
    //const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());
    
    const navigate = useNavigate();
    const authContext = useAuth();
    const username = authContext.username;

    const [todos, setTodos] = useState([]);

    const [message, setMessage] = useState(null);

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
        retrieveAllTodosForUsernameApi(username)
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => console.log(error));
    }

    function deleteTodo(id) {
        console.log(`delete todo ${id}`);

        deleteTodoApi(username, id)            
            .then(() => {
                setMessage(`Delete of todo with ID ${id} successful`);
                // update Todos list
                refreshTodos();
            })
            .catch(error => console.log(error));;
    }

    function updateTodo(id) {
        console.log(`update todo ${id}`);

        //  Redirect to to separate form/page to update!
        navigate(`/todo/${id}`);
    }

    function addNewTodo() {
        console.log('new todo');
        navigate(`/todo/-1`);
    }

    return (
        <div className="container">
           <h1>Things you want To Do!</h1>
           {message && <div 
                className="alert alert-warning"
            >
            {message}</div>}
           <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
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
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate}</td>
                                    <td>
                                        {/* Example of passing a value to a hook */}
                                        <button 
                                            className="btn btn-warning"
                                            onClick={() => deleteTodo(todo.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                            className="btn btn-success"
                                            onClick={() => updateTodo(todo.id)}
                                        >
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
           </div>
           <div 
                className="btn btn-success m-5"
                onClick={ addNewTodo }
            >
                Add New Todo
           </div>
        </div>
    );
}