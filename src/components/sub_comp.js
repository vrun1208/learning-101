import React from "react";

const ItemDes =({name, des})=> {
    return (
        <div>
            <h2>{name}</h2>
            <p>
                <i>{des}</i>
                </p>
        </div>
    )
}

export default ItemDes;