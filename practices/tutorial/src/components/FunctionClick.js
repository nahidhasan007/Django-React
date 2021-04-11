import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("You clicked!")
    }
    return (
        <div>
            <button onClick={clickHandler}>
                Click Me
            </button>
        </div>
    )
}
export default FunctionClick
