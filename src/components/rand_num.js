import React, { useState } from "react";

const RandNum = () => {
    const [click, setClick] = useState([]);

    const addNum = ()=>{
        setClick([
            ...click,
            {
                id:click.length,
                value: Math.random()* 10
                //value: Math.floor(Math.random()* 10)
            }
        ]);
    };

    const resetNum=()=>{
        setClick([]);
    }

    return(
        <div>
            <ul>
                {click.map(item =>(
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
            <button onClick={addNum}>clickMebitch!</button>
            <button onClick={resetNum}>clickToResetBitch!</button>
        </div>
    )
}

export default RandNum;