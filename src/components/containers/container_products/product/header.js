import React from "react";
import { removeActive } from "../addActive";

function Header(){
    return <div className="header">
        <p>Edit Product</p>
        <div onClick={()=> removeActive(['.container_products','.container_update','.cards'])}>
            <h4>See Full View</h4>
            <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
    </div>
}


export default Header