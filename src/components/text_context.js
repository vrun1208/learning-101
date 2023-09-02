import React, { useContext } from "react";
import { texting } from "./iamcontext";

const Text = () =>{
    const {text, setText} = useContext(texting);

    return (
        <div>
            <h1>Hello, <i>{text}</i> </h1> 
        </div>
    )
}


export default Text;