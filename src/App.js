import { useState } from "react"

export const App = () => {

    const [counter, setCounter] = useState(0);

    const [values, setValues] = useState();

    const handleClick = () => {
        setCounter(counter + 1);
        setValues(values.concat(counter));
    }

    return (
        <div className="container">
            <h1>Hello World</h1>
            <button onClick={handleClick} >push button</button>
            <h2>{counter}</h2>
        </div>
    )
}
