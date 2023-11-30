import React from "react";

function Header(){


    const removeActive = (selectors) => {
        selectors.map(selector =>{
            const element = document.querySelector(selector);
            element.classList.remove('active')
        })
    };
    

    return <div className="header">
        <p>Edit Product</p>
        <div onClick={()=> removeActive(['.container_products','.container_update','.cards'])}>
            <h4>See Full View</h4>
            <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
    </div>
}


export default Header