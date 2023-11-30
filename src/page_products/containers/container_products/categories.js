import React from "react";


function Categoriers(){
    return <div className="categories">
        <ul>
            <li>All Products</li>
            <li>Most Purchased</li>
            <li>Jewelry</li>
            <li>Sprot</li>
            <li>Watches</li>
            <li>Shoes</li>
            <li>Phones</li>
            <li>Computers</li>
        </ul>
        <div>
            <ul>
                <li>
                    <p>Sort By</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                        {/* <rect width="12" height="14" fill="white"/> */}
                        <line y1="3.5" x2="12" y2="3.5" stroke="black"/>
                        <path d="M2 7H6H10" stroke="black"/>
                        <line x1="5" y1="10.5" x2="7" y2="10.5" stroke="black"/>
                    </svg>
                </li>
            </ul>
        </div>
    </div>
}


export default Categoriers