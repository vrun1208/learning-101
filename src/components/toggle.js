import React, { useEffect, useState } from "react";

const SwitchTheme=() =>{
   const [theme, setTheme] = useState('dark-theme');

    const toggle =()=>{
        if(theme === "light-theme"){
            setTheme("dark-theme")
        }
        else{
            setTheme("light-theme")
        }
    }

    useEffect(()=>{
         document.body.className= theme;
    }, [theme]);

    return(
        <div>
            <button onClick={toggle}>Toggle Theme</button>
        </div>
    )
};

export default SwitchTheme;

