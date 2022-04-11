import React, { useState } from 'react';
import Counter from "./Counter";
import CounterActions from "./CounterActions";

function CounterContainer() {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(counter+1);
    }
    const decreaseCounter = () => {
        setCounter(counter-1);
    }
    return (
        <div className="container border mx-auto my-5">
            <Counter counter={counter}/>
            <CounterActions increaseCounter={increaseCounter} decreaseCounter={decreaseCounter} />
        </div>
    )
}
export default CounterContainer