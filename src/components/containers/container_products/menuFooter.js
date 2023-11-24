import React from "react";


function MenuFooter(){
    return <div className="menuFooter">
        <p>Showing 1 to 10 of 20 results</p>
        <ul>
            <li><ion-icon name="chevron-back-outline"></ion-icon></li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>...</li>
            <li>10</li>
            <li><ion-icon name="chevron-forward-outline"></ion-icon></li>
        </ul>
    </div>
}


export default MenuFooter