import React, { useState } from 'react'

const Counter = () => {

    var [count, setCount] = useState(0);

    const [open, setOpen] = useState(false);

    const handleBar = () =>{
        setOpen(!open);
    }

    const decrement = () => {
        setCount(count-1);
    }

    const increment = () => {
        setCount(count+1);
    }

    if(count === 10) {
        return(
            <p>the end.</p>
        )
    };




    return (
        <div>
            <h1>welcome to the worlds bestest counter program ever written in the history of mankind.</h1>
        <button onClick={decrement}>decrement</button>
        {count}
        <button onClick={increment}>increment</button>

        <p>worlds bestest dropdown ever created in the human history.</p>
        <button onClick={handleBar}>
            DropDown
        </button>
        {open ? (
            <ul className='dropdown'>
                <li> item 1</li>
                <li> item 2</li>
                <li> item 3</li>
                <li> item 4</li>
            </ul>
        ) : null
            //<div>isopen</div> : <div>isclosed</div>
    }
        </div>
        
    )
}

export default Counter;

