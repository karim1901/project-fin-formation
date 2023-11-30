import React from "react";


function Search(){
    return <div className="search">
        <p>Products</p>
        <div className="search_btn">
            <ion-icon name="search-outline"></ion-icon>
            <input type="text" placeholder="Search Product..."/>
            <div>
                <button id="btnAddPro">Add New Product +</button>
            </div>
        </div>
    </div>
}


export default Search