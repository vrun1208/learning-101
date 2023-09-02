import React from 'react'
import ItemDes from './sub_comp';
const ImProp = ({name, des, price}) => {
    return ( <div>
        <p>EveryThing will be allright..</p>
        <ItemDes 
            name={name}
            des={des}
        />
        <p>{price}</p>
    </div>
        
    );
} 

ImProp.defaultProps ={
    name : "bitch.io"
}

export default ImProp;