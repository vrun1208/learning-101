import React, { createContext, useContext, useState } from "react";
import { firstName } from "../App";
import Text from "./text_context";

export const texting = createContext("");

const IamContext = () =>{
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
      };

    const fname = useContext(firstName);

    return(
        <div>
            
            <h3>Hello, heree this section im using context api to store a 
            peice of information and use it on different component.</h3>

            <h2>TADA!</h2>
            <p><i>
                {fname}
                </i></p>
            <input className="inpyText" type="text" id="msg" name="msg" onChange={handleChange} value={text}/>
            <texting.Provider value ={{text, setText}}>
                <Text />
            </texting.Provider>
        </div>
    );   
}

export default IamContext;