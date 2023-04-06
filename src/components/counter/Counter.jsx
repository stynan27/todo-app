import React, { useState } from 'react';
import './Counter.css';

export default function Counter() {

    // JSX Embedded styling
    // Instead opt for separate Counter.css file
    // const buttonStyle = {
    //   fontSize: "16px",
    //   color: "white",
    //   backgroundColor: "#00a5ab",
    //   width: "100px",
    //   margin: "10px",
    //   padding: "15px",
    //   borderRadius: "30px",
    // };

    // [0, f()]
    //const state = useState(0);
    //instead write...
    const [count, setCount] = useState(0);

    function incrementCounterFunction() {
        setCount(count+1);
    }

    return (
        <div className="Counter">
            <span className="count">{count}</span>
                <div>
                    {/* Example of style css object with camel-case fontSize
                    and double curly braces i.e. {{}} */}
                    {/* <button className="counterButton" 
                            onClick={incrementCounterFunction}
                            style={buttonStyle}
                    > */}
                    <button className="counterButton" 
                            onClick={incrementCounterFunction}
                    >
                        +1
                    </button>
                </div>
        </div>
    )
}