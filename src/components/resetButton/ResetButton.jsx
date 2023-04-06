import React from 'react';
import './ResetButton.css';

export default function ResetButton({resetMethod}) {
    function resetCounterFunction() {
        resetMethod(0);
    }

    return (
        <div className="ResetButton">
            <div>
                <button className="resetButton" 
                        onClick={resetCounterFunction}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}