import "../Hooks.css";
import { useState } from "react";

export const Counter = () => {
    // console.log(useState(5));
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
        console.log("inner", count);
    };

    console.log("outer", count);

    return (
        <div className="container state-container" style={{ textAlign: "Center"}}>
        <h1>useState Hook!</h1>
        <br />
        <p>{count}</p>
        <button className="state-button" onClick={(handleIncrement) => setCount(count + 1)}>Increment</button>
        </div>
    );
};