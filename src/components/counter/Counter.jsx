import React, { useState } from 'react';

import './Counter.css';
import CounterButton from '../counterButton/CounterButton';

export default function Counter() {
    
    // Initialize state variavle, with corresponding setter function
    // [0, f()]
    //const state = useState(0);
    //instead write...
    const [count, setCount] = useState(0);

    function incrementCounterParent(by) {
        setCount(count + by);
    }

    function decrementCounterParent(by) {
        setCount(count - by);
    }
    
    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton incrementMethod={incrementCounterParent} decrementMethod={decrementCounterParent}/>
            <CounterButton by={2} incrementMethod={incrementCounterParent} decrementMethod={decrementCounterParent}/>
            <CounterButton by={5} incrementMethod={incrementCounterParent} decrementMethod={decrementCounterParent}/>
        </>
    );
}