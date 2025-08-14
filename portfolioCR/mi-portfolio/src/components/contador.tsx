import { useState } from "react";

export default function Contador(){

    const [count, setCount] = useState(0);

    function sumar(){
        setCount(count+1)
    }

    function restar(){
        setCount(count-1)
    }

    function reset(){
        setCount(0)
    }

    return(
        <>
            <h1>Contador</h1>
            <h1>{count}</h1>
            <button onClick={sumar}>SUMAR</button>
            <button onClick={restar}>RESTAR</button>
            <button onClick={reset}>RESETEAR</button>
        </>
    )
}