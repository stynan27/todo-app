import React from 'react';
import { PropTypes } from 'prop-types';
import './CounterButton.css';

export default function CounterButton({by, incrementMethod, decrementMethod}) {

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

    function incrementCounterFunction() {
        incrementMethod(by);
    }

    function decrementCounterFunction() {
        decrementMethod(by);
    }

    return (
        <div className="Counter">
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
                    +{by}
                </button>
                <button className="counterButton" 
                        onClick={decrementCounterFunction}
                >
                    -{by}
                </button>
            </div>
        </div>
    )
}

// Specify type as number for props
CounterButton.propTypes = {
    by: PropTypes.number
}

// Specify default value for props
CounterButton.defaultProps = {
    by: 1
}