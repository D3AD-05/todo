//HOOks
import React, { useState } from "react";


function Hook() {
    var [current, setCount] = useState(0)
    var [disabled, setdisable] = useState(Boolean)

    function Decrease() {
        // setCount(current - 1)
        setCount(prevs => prevs-1)
        // setCount(prevs => prevs-1)
        if (current===5){
            setdisable(true)
        }
        setdisable(false)

    }


    

    function Increase(){
        setCount(prv=>prv+1) 
    }
    return (
        <div>
            <button onClick={Decrease} disabled=
            {disabled}>-</button>
            <span>{current}</span>
            <button onClick={Increase}>*</button>
        </div>
    )
}
export default Hook;