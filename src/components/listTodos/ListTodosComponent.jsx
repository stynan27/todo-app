export default function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());
    
    const todos = [
        { id: 1, description: 'learn AWS', done: false, targetDate: targetDate},
        { id: 2, description: 'learn Fullstack', done: false, targetDate: targetDate},
        { id: 3, description: 'learn DevOps', done: false, targetDate: targetDate},
    ];

    return (
        <div className="ListTodosComponent">
           <h1>Things you want To Do!</h1>
           <div>
                <table>
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
                                    <td>{todo.targetDate.toDateString()}</td>
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