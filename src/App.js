import './App.css';
//import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';

function App() {
  return (
    <div className="App">
    {/* 
        Counter Component Example
        <Counter/> 
    */}
        <TodoApp/>
    </div>
  );
}

// props/properties pass as an object of key/value pairs
//function PlayingWithProps(properties) {
//console.log(properties.property1);

// or directly via object decomposition
// function PlayingWithProps({property1, property2}) {
//     console.log(property1);

//     return (
//         <div>props</div>
//     );
// }

export default App;
